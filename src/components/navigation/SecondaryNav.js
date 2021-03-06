import React from 'react';
import {FormattedMessage} from 'react-intl';

//NOTE "Link" was used for scroll links "ReactLink" from navigation links
import {Link as ScrollLink} from 'react-scroll';
import Link from 'APP/components/navigation/Link';


const SecondaryNav = (props) => {
    return (
        <nav className={props.display ? "secondary-nav fade-in" : "secondary-nav fade-out hidden"}>
            <div className="wrapper secondary-nav-container">
                {/*<!-- Menu -->*/}
                <ul className="secondary-nav-list" role="menu">
                    {props.links.map((link, i) => (
                        <li key={i}>
                            <ScrollLink
                                activeClass="current"
                                to={link.to}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-100}
                                >
                                {link.name}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
                {/*<!-- CTA -->*/}
                <ul className="secondary-nav-cta">
                    <li><Link to="/apply" className="btn-primary btn-small">
                        <FormattedMessage
                            id="navigation.SecondaryNav.applyNow"
                            defaultMessage="Apply Now"
                        /></Link>
                    </li>
                    <li><a href={props.syllabus} className="btn-secondary btn-small" download={true}>
                        <FormattedMessage
                            id="navigation.SecondaryNav.syllabus"
                            defaultMessage="Syllabus"
                        /></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

SecondaryNav.propTypes = {
    display: React.PropTypes.bool.isRequired,
    links: React.PropTypes.array.isRequired,
    syllabus: React.PropTypes.string.isRequired
};

export default SecondaryNav;
