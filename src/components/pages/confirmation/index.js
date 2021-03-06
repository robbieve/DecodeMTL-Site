import React from 'react';
import Helmet from 'react-helmet';
import {FormattedMessage} from 'react-intl';
import { injectIntl } from 'react-intl';

const link = {
    en: [
        {"rel": "alternate", "hreflang": "fr","href":"https://www.decodemtl.com/fr/confirmation"},
    ],
    fr: [
        {"rel": "alternate", "hreflang": "en","href":"https://www.decodemtl.com/confirmation"},
    ]
}

const Confirmation = (props) => {
    const status = props.location.query.status;

    if (status === 'success') {
        return (
            <section className="module">
                <div className="wrapper">
                    <h2 className="module-title">
                        <FormattedMessage
                            id="pages.confirmation.success"
                            defaultMessage="Success!"
                        />
                    </h2>
                    <p>
                        <FormattedMessage
                            id="pages.confirmation.yourApplication"
                            defaultMessage="Your application has been received. Our team is currently reviewing it and will get back to you within 48 hours (not including weekends or holidays)."
                        />
                        </p>
                    <p>
                        <FormattedMessage
                            id="pages.confirmation.ifYou"
                            defaultMessage="If you have any questions in the meantime, please "
                        />
                        <a href="mailto:hello@decodemtl.com">
                            <FormattedMessage
                                id="pages.confirmation.emailUs"
                                defaultMessage="email us."
                            />
                        </a>.
                    </p>
                </div>
            </section>
        );
    }
    return (
        <section className="module">
            <Helmet
                title={props.intl.formatMessage({id: "pages.confirmation.appConfirm", defaultMessage: "Application Confirmation"})}
                link={link[props.intl.locale]}
            />
            <div className="wrapper">
                <h2 className="module-title">Something went wrong!</h2>
                <p>Please try again! If the problem persists, please contact hello@decodemtl.com.</p>
            </div>
        </section>
    );

};

Confirmation.propTypes = {};

export default injectIntl(Confirmation);