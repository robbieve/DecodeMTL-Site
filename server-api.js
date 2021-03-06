import express from 'express';
import expressValidator from 'express-validator';
import bodyParser from 'body-parser';
import axios from 'axios';
import querystring from 'querystring';
import md5 from 'js-md5';

const app = express.Router();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

// validate user input
app.use(expressValidator());

// returns promises
const subscribeUser = (email, interests = {}) => {
    return new Promise((resolve, reject) => { // eslint-disable-line no-undef
        axios({
            method: 'post',
            url: `${process.env.MAIL_CHIMP_ROOT_URL}/`,
            data: {
                email_address: email,
                status: 'subscribed',
                interests
            },
            auth: {
                username: 'apiKey',
                password: process.env.MAIL_CHIMP_API
            }
        })
            .then(({data: user}) => {
                resolve(user);
            })
            .catch(({response: {data: err}}) => {
                reject(err);
            });
    });
};
const updateSubscriptionInterests = (email, interests = {}) => {
    const hash = md5(email);
    return new Promise((resolve, reject) => { // eslint-disable-line no-undef
        axios({
            method: 'put',
            url: `${process.env.MAIL_CHIMP_ROOT_URL}/${hash}`,
            data: {
                email_address: email,
                status: 'subscribed',
                interests
            },
            auth: {
                username: 'apiKey',
                password: process.env.MAIL_CHIMP_API
            }
        })
            .then(({data: user}) => {
                resolve(user);
            })
            .catch(({response: {data: err}}) => {
                reject(err);
            });
    });
};
const checkSubscription = (email) => {
    const hash = md5(email);
    return new Promise((resolve, reject) => { // eslint-disable-line no-undef
        axios({
            method: 'get',
            url: `${process.env.MAIL_CHIMP_ROOT_URL}/${hash}`,
            auth: {
                username: 'apiKey',
                password: process.env.MAIL_CHIMP_API
            }
        })
            .then(({data}) => {
                resolve(data);
            })
            .catch(({response: {data}}) => {
                reject(data);
            });
    });
};

// hello Codrin
const transporter = {
  sendMail(options, cb) {
    axios({
        method: 'post',
        url: `${process.env.MAILGUN_URL}`,
        data: querystring.stringify({
            from: options.from,
            to: options.to,
            subject: options.subject,
            html: options.html
        }),
        auth: {
            username: 'api',
            password: process.env.MAILGUN_API_KEY
        }
    })
    .then(res => typeof cb === 'function' && cb(null, res))
    .catch(err => typeof cb === 'function' && cb(err))
  }
};

app.post('/apply', (req, res) => {
    //Sanitize user input
    Object.keys(req.body).forEach(input => req.sanitize(input).escape());

    //User input data
    const data = req.body;
    // setup e-mail data
    //proceed editing at own risk
    const mailOptions = {
        from: data['email'], // sender address
        to: 'hello@decodemtl.com', // list of receivers
        subject: 'New Application from ' + data['first-name'] + ' ' + data['last-name'] + '', // Subject line
        text: 'New Application', // plaintext body
        html: `<div>
                <p>First Name: ${data['first-name']}</p>
                <p>Last Name: ${data['last-name']}</p>
                <p>Email: ${data['email']}</p>
                <p>Phone: ${data['tel']}</p>
                ${data['linkedin'] ? '<p>LinkedIn: ' + data["linkedin"] + '</p>' : ''}
                <p>Which course are you applying to: ${data['course']}</p>
                <p>Technical Knowledge: ${data['tech-background']}</p>
                ${data['hope'] && Array.isArray(data['hope']) ? '<p>Goals:</p><ul>' + data['hope'].map(goal => ('<li>' + goal + '</li>')).join('') + '</ul>' : data['hope'] ? '<p>Goal: ' + data['hope'] + '</p>' : ''}
                <p>About yourself: ${data['message']}</p>
                <p>How did you hear about DecodeMTL: ${data['heard-about-us']}</p>
               </div>` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return res.json({status: 'failed', error});
        }
        console.log('Message sent: ' + info.response);
        if (req.body['list-optin'] && req.body['list-optin'] === 'yes') {
            return subscribeUser(data.email)
                .then(response => {
                    res.json({status: 'success', sub_status: 'success'});
                })
                .catch(err => {
                    res.json({status: 'success', sub_status: 'failed'});
                });
        }
        res.json({status: 'success'})
    });
});

app.post('/newsletter', (req, res) => {
    req.sanitize('email').escape();
    const email = req.body.email.trim().toLowerCase();
    const interests = req.body.interests || {};
    checkSubscription(email)
        .then(response => {
            // if subscribed already update interests
            updateSubscriptionInterests(email, interests)
                .then(response => {
                    res.json({status: 'success'});
                }).catch(error => {
                res.json({status: 'failed', error});
            })
        })
        .catch(error => {
            if (error.status === 404) {
                // if not subscribed, subscribe user and add interests
                subscribeUser(email, interests)
                    .then(response => {
                        res.json({status: 'success'});
                    })
                    .catch(error => {
                        res.json({status: 'failed', error})
                    })
            }
        });
});

app.post('/visit', (req, res) => {

    req.sanitize('email').escape();

    const email = req.body.email.trim().toLowerCase();
    // setup e-mail data
    //proceed editing at own risk
    const mailOptions = {
        from: email, // sender address
        to: 'hello@decodemtl.com', // list of receivers
        subject: 'New Visit Request', // Subject line
        text: 'Someone wants to schedule a visit.', // plaintext body
        html: `<div>
                <p>Here is the email: ${email}</p></div>` // html body
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return res.json({error, status: 'failed'});
        }
        if (req.body.optin) {
            return subscribeUser(email)
                .then(response => {
                    res.json({status: 'success', sub_status: 'success'});
                })
                .catch(err => {
                    res.json({status: 'success', sub_status: 'failed'});
                });
        }
        console.log('Message sent: ' + info.response);
        res.json({status: 'success'})
    });
});

app.post('/contact', (req, res) => {
    //Sanitize user input
    Object.keys(req.body).forEach(input => req.sanitize(input).escape());

    // User input data
    const data = req.body;

    // setup e-mail data
    const mailOptions = {
        from: data['email'], // sender address
        to: 'hello@decodemtl.com', // list of receivers
        subject: 'New Message from ' + data['first-name'] + ' ' + data['last-name'] + '', // Subject line
        text: 'New Message', // plaintext body
        html: `<div>
                <p>First Name: ${data['first-name']}</p>
                <p>Last Name: ${data['last-name']}</p>
                <p>Email: ${data['email']}</p>
                <p>Phone: ${data['tel']}</p>
                <p>Message: ${data['message']}</p>
               </div>` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return res.json({error, status: 'failed'});
        }
        console.log('Message sent: ' + info.response);
        if (req.body['list-optin'] && req.body['list-optin'] === 'yes') {
            return subscribeUser(data.email)
                .then(response => {
                    res.json({status: 'success', sub_status: 'success'});
                })
                .catch(err => {
                    res.json({status: 'success', sub_status: 'failed'});
                });
        }
        res.json({status: 'success'})
    });

});

export default app;
