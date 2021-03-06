import React from 'react';

import Hero from '../../../components/modules/Hero';
import Helmet from 'react-helmet';

const PrepCourse = React.createClass({
    propTypes: {},
    getDefaultProps () {
        return {};
    },
    render() {
        return (
            <div>
                <Helmet
                    title={"Web Development Prep Course"}
                />
                <Hero moduleTitle={"Web Development"} jumboTitle={"Prep Course"} text={""} subText={''}/>
                <section className="module">
                  <div className="wrapper">

                    <h2 className="module-title">Welcome!</h2>

                    <p>We are super excited that you want to join DecodeMTL. We have created this prep course to help you prepare for your technical interview.</p>

                    <p>You should expect to spend 40 - 60 hours to get through all of the material.</p>

                    <p>At the first sign of confusion, you should take a step back and re-read what has confused you. Search Google, MDN or Stack Overflow for answers to your questions.</p>
                  </div>
                </section>

                <section className="module">
                  <div className="wrapper">

                    <h2 className="module-title">Part 1: Getting Started</h2>
                    <p>In this part, we are going to get the tools necessary to start the prep work.</p>

                    <h3>Do your work</h3>
                    <ul>
                      <li>
                        <h4><a href="http://www.google.com/chrome/" target="_blank">Download Google Chrome</a></h4>
                        <p>Google Chrome will be used as the main development browser during the course. Its integrated set of debugging tools makes developers’ lives easier. Chrome’s rendering engine is used by multiple browsers, giving you a good idea of what your pages would look like in many different settings.</p>
                      </li>
                      <li>
                        <h4><a href="https://www.github.com/" target="_blank">Signup for a GitHub account</a></h4>
                        <p>Git and GitHub will be a constant part of our workflow. While Git will enable us to keep track of the history of code that we write and manage variations in our code, GitHub will enable us to share and collaborate the code we write.</p>

                        <p>For this section, you are only tasked with signing up for a GitHub account. The last section of the prep material deals with your introduction to Git and GitHub.</p>

                        <p>This is a good place to mention that your GitHub username and profile have the same visibility as your profiles on facebook, twitter or LinkedIn. GitHub is the network of code in the same manner that LinkedIn is the network of professionals.</p>

                        <p>Employers will look at your GitHub profile for signs of your experience and interest. At this point, make sure to create a profile that represents you. Later on, we will fill your GitHub with various projects that will demonstrate the knowledge you have learned through DecodeMTL.</p>
                      </li>
                      <li>
                        <h4><a href="https://www.codecademy.com/register" target="_blank">Signup to Codecademy</a></h4>
                        <p>Codecademy has tons of tutorials on many aspects of computing and development. We will be using it to learn the fundamentals of JavaScript.</p>
                      </li>
                      <li>
                        <h4><a href="https://c9.io/" target="_blank">Signup for Cloud9 IDE</a></h4>
                        <p>The same way we edit our spreadsheets in Open Office or Excel, web pages and web applications need their own editor. Cloud9 is an IDE — Integrated Development Environment — in the cloud. This is just technical mumbo-jumbo. It’s a text editor on steroids, and already has installed most of the tools we will need during the bootcamp. Everything you do in Cloud9 is saved online, so you are able to start coding from any computer that has internet access. You don’t even need to install anything on your machine.</p>

                        <p>Make sure to use the <strong>“Sign in with GitHub”</strong> option when signing up to Cloud9. This will link your GitHub account to your Cloud9 account, allowing for an easier workflow between your code editor and source code repository.</p>

                        <p>When you create a new workspace in Cloud9, you are actually creating a <strong>virtual, linux-based computer</strong>. In the next section, we will learn how to control this computer using the <strong>Command Line</strong>.</p>
                      </li>
                    </ul>

                    <h3>Checkpoint</h3>
                    <p>Before moving on, make sure that you have the following:</p>

                    <ul>
                      <li>A GitHub account</li>
                      <li>A Cloud9 account</li>
                    </ul>

                  </div>
                </section>

                <section className="module">
                  <div className="wrapper">

                    <h2 className="module-title">Part 2: Command Line</h2>
                    <p>You are probably used to interacting with your computer through a mouse. A lot of the things you do on your computer use the mouse:</p>

                    <ul>
                      <li>Opening an application by <strong>double-clicking</strong> on it</li>
                      <li>Moving a file to another directory by <strong>dragging and dropping</strong> it</li>
                      <li>Saving a file by <strong>clicking</strong> File &gt; Save</li>
                      <li>Looking inside a directory by <strong>double-clicking</strong> on it</li>
                      <li>Deleting a file by <strong>right-clicking</strong> on it and then <strong>clicking</strong> on Remove or Delete.</li>
                    </ul>

                    <p>But as a power-user, we often learn some keyboard shortcuts to make our life easier. For example, you should be familiar with <code className="highlighter-rouge">Ctrl+C</code> (or <code className="highlighter-rouge">Cmd+C</code>) to copy some text, or perhaps <code className="highlighter-rouge">Cmd+Del</code> on a Mac to delete a file.</p>

                    <p>It turns out that all computer systems have a command line interface in addition to the graphical user interface we have become so accustomed to. Some systems that you will be dealing with as web developers do not even have a GUI.</p>

                    <p>For these reasons, you should be familiar enough with the CLI to perform some basic tasks. In order to gain familiarity with the CLI, go through the following readings and tutorials.</p>

                    <h3>Do your work</h3>
                    <ul>
                      <li>
                        <h4><a href="http://cli.learncodethehardway.org/book/" target="_blank">Read: The Command Line Crash Course</a></h4>
                      </li>
                      <li>
                        <h4><a href="https://www.tjhsst.edu/~dhyatt/superap/unixcmd.html" target="_blank">Read: Some Basic Unix Commmands</a></h4>
                      </li>
                      <li>
                        <h4><a href="http://www.techradar.com/how-to/computing/apple/terminal-101-creating-aliases-for-commands-1305638" target="_blank">Read: Terminal 101: Aliases</a></h4>
                      </li>
                      <li>
                        <h4><a href="https://www.codecademy.com/learn/learn-the-command-line" target="_blank">Do: Codecademy Command Line Course</a></h4>
                      </li>
                    </ul>

                    <h3>Checkpoint</h3>
                    <p>Before moving on, make sure you can at least answer the following questions:</p>

                    <ul>
                      <li>How do I figure out which directory I’m currently in?</li>
                      <li>How do I list files sorted by the date they were last modified?</li>
                      <li>How do I find out how much disk space a directory is using?</li>
                    </ul>

                  </div>
                </section>

                <section className="module">
                  <div className="wrapper">

                    <h2 className="module-title">Part 3: Programming with JavaScript</h2>
                    <p>JavaScript is the main language of this bootcamp. We will be using JavaScript for the front-end – the browser – as well as the back-end – the server and database.</p>

                    <h3>Do your work</h3>
                    <ul>
                      <li>
                        <h4><a href="http://outspeaking.com/words-of-technology/what-is-programming.html" target="_blank">Read: What is programming?</a></h4>
                        <p>Read this to get a general overview of programming. As you get your hands dirty with code, it’s always a good idea to remind yourself of the end-goal.</p>
                      </li>
                      <li>
                        <h4><a href="http://www.codecademy.com/tracks/javascript" target="_blank">Do: Codecademy JavaScript track</a></h4>
                        <p>This tutorial will get you familiar with the basics of the JavaScript language. As you go through the tutorial, don’t hesitate to <strong>supplement your knowledge</strong> by looking at resources such as the <a href="https://developer.mozilla.org/en-US/" target="_blank">Mozilla Developer Network</a></p>
                      </li>
                      <li>
                        <h4><a href="http://www.codecademy.com/tracks/jquery" target="_blank">Do: Codecademy jQuery track</a></h4>
                        <p>This tutorial will show you the fundamentals of jQuery, a JavaScript library (fancy word for piece of code) that makes it easy to manipulate a web page live, without refreshing it.</p>
                      </li>
                      <li>
                        <h4><a href="https://learn.jquery.com/ajax/" target="_blank">Do: jQuery AJAX tutorial</a></h4>
                        <p>This will be your first introduction to <strong>asynchronous programming</strong>. The JavaScript engine can only do one thing at a time, so when something takes too long we conceptually give JavaScript a “phone number where it can call us back”, so that we can do other interesting things instead of waiting.</p>
                      </li>
                    </ul>

                    <h3>Checkpoint</h3>
                    <p>Before moving on to the next section, try to answer the following questions:</p>

                    <ul>
                      <li>Describe the activity of programming <strong>in your own words</strong>, using a few sentences.</li>
                      <li>Create a JavaScript function that takes an integer as input, and <strong>returns</strong> all the prime factors of the number in an <strong>array</strong>. You don’t need to pay attention to the performance of your code.</li>
                      <li>Write a piece of jQuery code that uses the browser’s <code className="highlighter-rouge">alert</code> function to open a popup when the user clicks on any <code className="highlighter-rouge">button</code> that has the class “<code className="highlighter-rouge">popup</code>”.</li>
                      <li><strong>Optional/Advanced</strong>: Write a piece of AJAX code that fetches the <a href="https://developer.mozilla.org/en-US/search.json?q=javascript" target="_blank">MDN search results for “javascript”</a> and prints the <strong>title</strong> of each search result on the console.</li>
                    </ul>

                  </div>
                </section>

                <section className="module">
                  <div className="wrapper">

                    <h2 className="module-title">Part 4: HTML &amp; CSS</h2>
                    <p>HTML and CSS are an integral part of web development. While HTML is used to give meaning to content, CSS is used to style that content.</p>

                    <h3>Do your work</h3>
                    <ul>
                      <li>
                        <h4><a href="http://learn.shayhowe.com/html-css/" target="_blank">Beginner guide to HTML and CSS</a></h4>
                        <p>Read the full reference at your own pace. Keep a link to it in case you need to remind yourself of something you read :)</p>
                      </li>
                      <li>
                        <h4><a href="http://www.codecademy.com/tracks/web" target="_blank">Do: Codecademy’s HTML &amp; CSS</a></h4>
                        <p>This will supplement the knowledge that you earned by reading the beginner guide to HTML and CSS.</p>
                      </li>
                      <li>
                        <h4><a href="http://cssxcountry.codeschool.com/levels/1/" target="_blank">Do: Code School’s CSS Cross Country</a></h4>
                        <p><strong>Only complete level 1</strong> of this course. If you wish to complete the other levels, you are most welcome to do so on your free time :)</p>
                      </li>
                      <li>
                        <h4><a href="https://www.codeschool.com/courses/discover-devtools" target="_blank">Do: Code School’s Chrome Dev Tools</a></h4>
                        <p>Go through <strong>levels 1 and 2 only.</strong> This will give you a good understanding of the tools we use on a daily basis to help us find bugs in our web pages.</p>
                      </li>
                    </ul>

                    <h3>Checkpoint</h3>
                    <p>If you don't already have one, create a simple HTML and CSS personal webpage that showcases what you have learned in this section.</p>

                  </div>
                </section>

                <section className="module">
                  <div className="wrapper">

                    <h2 className="module-title">Part 5: Git &amp; GitHub</h2>
                    <p>Source code management is an integral part of writing software. Throughout the history of a piece of software, be it a web site, web application or other, changes will happen. Often, features that are not ready for prime-time will have to be developed <strong>in parallel</strong>. And in most cases, software will be worked on by <strong>multiple developers</strong>.</p>

                    <p><strong>Git</strong> is a tool that empowers developers to accomplish these features without having to worry about the state of the project. If you’ve ever written a Word document, you may have found yourself creating a copy at some point, in order to try something else. Among other things, Git gives you the ability to branch off and create new features while keeping the working version of your software clean. It also lets you go back in time to a previous working version and examine it, without ever losing your work.</p>

                    <p><strong>GitHub</strong> is like a “social network around Git”. It is a platform that lets you publish your Git-managed projects online for others to see and collaborate on. Your GitHub profile is the equivalent of your LinkedIn profile for technical employers. In it, anyone can see what projects you have shared and contributed to. This is why it is important to document your adventures in web development by publishing as much of your work as possible to GitHub.</p>

                    <h3>Do your work</h3>
                    <ul>
                      <li>
                        <h4><a href="https://try.github.io/levels/1/challenges/1" target="_blank">Do: Try Git</a></h4>
                        <p>Complete this Git tutorial provided for free by the nice people at GitHub. Git is a program that you have to install on your system. Fortunately in our case, since we are doing all our work inside the Cloud 9 IDE, Git is already installed for us. Cloud 9 has even already configured our Git installation to tag all the work we do with our name and e-mail address.</p>
                      </li>
                      <li>
                        <h4><a href="https://rogerdudler.github.io/git-guide/" target="_blank">Read: Git, the simple guide</a></h4>
                        <p>If you are feeling adventurous, you can try this Git tutorial on your own computer. However, it would be sufficient to use a Cloud9 workspace. If you remember, Cloud9 workspaces are actually virtual computers running the Linux operating system. Git is pre-installed as part of your Cloud9 development environment.</p>
                      </li>
                    </ul>

                    <h3>Checkpoint</h3>
                    <p>Make sure that you can answer most if not all of the following questions. Some of them will be part of your technical interview:</p>

                    <ul>
                      <li>Describe what is Git <strong>in your own words</strong>, using a few sentences.</li>
                      <li>Describe what is GitHub <strong>in your own words</strong>, using a few sentences.</li>
                      <li>Do you need an internet connection to use Git?</li>
                      <li>Do you need an internet connection to use GitHub?</li>
                      <li>What is the difference between <code className="highlighter-rouge">git add</code> and <code className="highlighter-rouge">git commit</code>?</li>
                      <li>What is the difference between <code className="highlighter-rouge">git commit</code> and <code className="highlighter-rouge">git push</code>?</li>
                      <li>Publish the webpage you created in section 4 to Github pages. <em>Hint, read this: <a href="https://pages.github.com/">https://pages.github.com/</a></em>.</li>
                    </ul>

                  </div>
                </section>

                <section className="module">
                  <div className="wrapper">

                    <h2 className="module-title">You are done :)</h2>

                    <p>Pat yourself on the back. If you’ve successfully completed all the sections above, you should now have a pretty solid introduction to many of the tools and languages used in web development.</p>

                    <p>The next step is to complete your technical interview. If you have not yet scheduled it, you should contact us.</p>

                    <p>Most people tend to over prepare for their technical interview. Generally, if you have gone through all of the material, you should be fine. If you fail your interview the first time, you can always study more and try again.</p>

                    <p>Here is what you will be tested on:
                      <ol>
                        <li>You have a GitHub and Cloud9 account.</li>
                        <li>You are OK with the basics of HTML and CSS. To show it, you have a small web page that you created and uploaded on GitHub Pages.</li>
                        <li>You are OK with the basics of JavaScript strings, numbers, booleans, arrays, objects, functions, variables, loops and conditionals. You can declare a variable, assign it a value, create an object with some properties, assign new properties to an object, do a basic loop, run code conditionally and create basic functions.</li>
                        <li>You are OK with the basics of the Mac or Linux command line. You can move from directory to directory, list files, see which directory you're in, and operate the basics of Git (add, commit, push) from the command line.</li>
                      </ol>
                    </p>

                    <p>If you have any questions, don’t hesitate to e-mail <a href="mailto:hello@decodemtl.com">hello@decodemtl.com</a>.</p>

                  </div>
                </section>
          </div>
        );
    }
});

export default PrepCourse;
