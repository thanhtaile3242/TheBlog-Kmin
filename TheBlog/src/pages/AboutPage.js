import style from "../SCSS/AboutPage.module.scss";
import { useState } from "react";
import Banner from "../components/Banner.js";
import Navigation from "../components/Navigation.js";
import Footer from "../components/Footer.js";
import author from "../assets/author.png";
import { useOutletContext } from "react-router-dom";
const AboutPage = () => {
    const [whiteTheme, setWhiteTheme] = useOutletContext();
    return (
        <>
            <div
                className={
                    whiteTheme
                        ? `${style.main_content}`
                        : `${style.main_content_black}`
                }
            >
                <Banner whiteTheme={whiteTheme} title={"John Doe"} />
                <section className={style.author_detail}>
                    <div className={style.picture_container}>
                        <img src={author} alt="" />
                    </div>
                    <div className={style.author_info}>
                        <span className={style.span_bold}>About Me</span>
                        <span className={style.span_normal}>
                            As a passionate and experienced UI designer, I am
                            dedicated to creating intuitive and engaging user
                            experiences that meet the needs of my clients and
                            their users. I have a strong understanding of design
                            principles and a proficiency in design tools, and I
                            am comfortable working with cross-functional teams
                            to bring projects to fruition. I am confident in my
                            ability to create designs that are both visually
                            appealing and functional, and I am always looking
                            for new challenges and opportunities to grow as a
                            designer.
                        </span>
                    </div>
                    <div className={style.author_info}>
                        <span className={style.span_bold}>Skills:</span>
                        <ul>
                            <li>
                                Extensive experience in UI design, with a strong
                                portfolio of completed projects
                            </li>
                            <li>
                                Proficiency in design tools such as Adobe
                                Creative Suite and Sketch
                            </li>
                            <li>
                                Excellent visual design skills, with a strong
                                understanding of layout, color theory, and
                                typography
                            </li>
                            <li>
                                Ability to create wireframes and prototypes to
                                communicate design concepts
                            </li>
                            <li>
                                Strong communication and collaboration skills,
                                with the ability to work effectively with
                                cross-functional teams
                            </li>
                            <li>
                                Experience conducting user research and
                                gathering insights to inform design decisions
                            </li>
                            <li>Proficiency in HTML, CSS, and JavaScript</li>
                        </ul>
                    </div>
                    <div className={style.author_info}>
                        <span className={style.span_bold}>Experience:</span>
                        <ul>
                            <li>
                                5 years of experience as a UI designer, working
                                on a variety of projects for clients in the tech
                                and retail industries
                            </li>
                            <li>
                                Led the design of a successful e-commerce
                                website, resulting in a 25% increase in online
                                sales
                            </li>
                            <li>
                                Excellent visual design skills, with a strong
                                understanding of layout, color theory, and
                                typography
                            </li>
                            <li>
                                Created wireframes and prototypes for a mobile
                                banking app, leading to a 20% increase in app
                                usage
                            </li>
                            <li>
                                Conducted user research and usability testing to
                                inform the redesign of a healthcare provider's
                                website, resulting in a 15% increase in website
                                traffic
                            </li>
                        </ul>
                    </div>
                    <div className={style.author_info}>
                        <span className={style.span_bold}>Education:</span>
                        <ul>
                            <li>Bachelor's degree in Graphic Design</li>
                            <li>Certified User Experience Designer (CUED)</li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
};
export default AboutPage;
