import React from 'react';
import Link from 'APP/components/navigation/Link';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {FormattedMessage} from 'react-intl';

import screenShot from '../../assets/images/video-screenshot.jpg';

const HomeHero = React.createClass({
    propTypes: {},
    getInitialState() {
        return {
            videoModal: false
        };
    },
    _toggleModal() {
        this.setState({
            videoModal: !this.state.videoModal
        })
    },
    render() {
        const renderVideoModal = () => {
            if (this.state.videoModal) {
                return (
                    <div style={{display: 'block'}}
                         className="modal modal-dark"
                         onClick={this._toggleModal}>
                        <div className="close-btn">
                            <svg onClick={this._toggleModal} id="close-x" className="close-x"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                                <path d="M 10,10 L 30,30 M 30,10 L 10,30"/>
                            </svg>
                        </div>
                        <figure className="video-container modal-content">
                            <iframe width="1280" height="720"
                                    src="https://www.youtube.com/embed/AE31kPUJE8o?rel=0&amp&autoplay=1;showinfo=0"
                                    frameBorder="0" allowFullScreen={true}>
                            </iframe>
                        </figure>
                    </div>
                );
            }
            return null;
        };
        return (
            <header className="module module-home hero-home">
                <div className="wrapper">
                    <h1 className="module-title">
                      <span className="module-title-jumbo">
                        <FormattedMessage
                          id="modules.HomeHero.heading"
                          defaultMessage="Learn To Code"
                        />
                      </span>
                    </h1>
                    <div className="hero-content">
                        <div className="hero-text">
                            <p className="text-body-large text-subtle">
                                <FormattedMessage
                                    id="modules.HomeHero.subText"
                                    defaultMessage="We offer Montreal’s top rated Web Development Bootcamp. Learn to code through project based teaching from industry experts in a stimulating environment."
                                />
                            </p>
                            <div className="cta-single">
                                <Link to="/apply" className="btn-primary btn-large hero-btn">
                                    <FormattedMessage
                                        id="modules.HomeHero.button"
                                        defaultMessage="Apply Now"
                                    />
                                </Link>
                            </div>
                        </div>
                        {/* .hero-text */}
                        <div className="hero-visual">
                            <div onClick={this._toggleModal} className="video-trigger clickme">
                                <svg className="video-controls" width="129" height="83" viewBox="0 0 129 83"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path className="video-controls-background" d="M0 0h129v83H0z"/>
                                        <path className="video-controls-play" d="M80 42L50 62V22"/>
                                    </g>
                                </svg>
                                <img className="video-clip-img" src={screenShot} alt="video screenshot"/>
                            </div>
                            <ReactCSSTransitionGroup
                                transitionName="video"
                                transitionEnterTimeout={500}
                                transitionLeaveTimeout={300}>
                                {renderVideoModal()}
                            </ReactCSSTransitionGroup>
                            {/* /.modal */}
                        </div>
                        {/* /.hero-visual */}
                    </div>
                    {/* /.hero-content */}
                </div>
                {/* /.wrapper */}
            </header>
        );
    }
});

export default HomeHero;
