import React, { useState } from 'react';
import './services.css';
import { HiOutlineClipboardList, HiOutlineArrowSmRight, HiOutlineCheckCircle, HiX } from 'react-icons/hi';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Servicesssssss</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                {/* Full Stack Dev */}
                <div className="services__content">
                    <div>
                        <HiOutlineClipboardList className="services__icon" />
                        <h3 className="services__title">Full-Stack<br />Development</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More <HiOutlineArrowSmRight className="services__button-icon" />
                    </span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                            <h3 className="services__modal-title">Full-Stack Developer</h3>
                            <p className="services__modal-description">
                                Building fast, responsive, and scalable web applications.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">React + Node.js development</p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">API integration & backend logic</p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">JWT auth & dashboard systems</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Data Science */}
                <div className="services__content">
                    <div>
                        <HiOutlineClipboardList className="services__icon" />
                        <h3 className="services__title">Data<br />Science</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(2)}>
                        View More <HiOutlineArrowSmRight className="services__button-icon" />
                    </span>
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                            <h3 className="services__modal-title">Data Science</h3>
                            <p className="services__modal-description">
                                Extracting insights from data to drive decisions.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">Data cleaning & visualization</p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">Predictive analytics & ML models</p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">Tableau dashboard reporting</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* UI/UX Design */}
                <div className="services__content">
                    <div>
                        <HiOutlineClipboardList className="services__icon" />
                        <h3 className="services__title">UI/UX<br />Design</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(3)}>
                        View More <HiOutlineArrowSmRight className="services__button-icon" />
                    </span>
                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                            <h3 className="services__modal-title">UI/UX Design</h3>
                            <p className="services__modal-description">
                                Clean and accessible interfaces focused on user experience.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">Responsive UI with Tailwind CSS</p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">Minimal, modern design systems</p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">Animated & accessible components</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
