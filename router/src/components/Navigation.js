import style from "../SCSS/Navigation.module.scss";
import naviIcon from "../assets/naviIcon.svg";
import Moon from "../assets/moon.svg";
import Sun from "../assets/sun.svg";
import Sun2 from "../assets/sun2.svg";
import crossX from "../assets/crossX.svg";
import threeLine from "../assets/3lineWhite.svg";
import crossXblack from "../assets/crossXblack.svg";
import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
const Navigation = (props) => {
    const whiteTheme = props.whiteTheme;

    return (
        <>
            {/* Navigation - mobile */}
            <div className={style.navi_mobile}>
                <div
                    className={
                        whiteTheme
                            ? `${style.navigation_container}`
                            : `${style.navigation_container_black}`
                    }
                >
                    <span className={style.navi_name}>Thanh Tai</span>
                    <label for="menu_full">
                        <img
                            src={whiteTheme ? `${naviIcon}` : `${threeLine}`}
                            className={style.naviIcon}
                        />
                    </label>
                </div>
                <input
                    type="checkbox"
                    id="menu_full"
                    className={style.full_menu}
                    hidden
                />
                <div
                    className={
                        whiteTheme
                            ? `${style.fullSize_navi}`
                            : `${style.fullSize_navi_black}`
                    }
                >
                    <div>
                        <span className={style.navi_name}>
                            <Link to="/" className={style.link}>
                                Thanh Tai
                            </Link>
                        </span>
                    </div>
                    <div className={style.navi_content}>
                        <span>
                            <Link to="/" className={style.link}>
                                Blogs
                            </Link>
                        </span>
                        <span>
                            <Link to="/projects" className={style.link}>
                                Projects
                            </Link>
                        </span>
                        <span>
                            <Link to="/about" className={style.link}>
                                About
                            </Link>
                        </span>
                        <span>
                            <Link to="/newsletter" className={style.link}>
                                Newsletter
                            </Link>
                        </span>

                        {whiteTheme ? (
                            <>
                                <div className={style.icon_container}>
                                    <img
                                        src={Sun2}
                                        onClick={() => {
                                            props.setWhiteTheme(true);
                                        }}
                                    />
                                    <div
                                        className={`${style.iconMoon}`}
                                        onClick={() => {
                                            props.setWhiteTheme(false);
                                        }}
                                    ></div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={style.icon_container}>
                                    <div
                                        className={`${style.iconSun_black}`}
                                        onClick={() => {
                                            props.setWhiteTheme(true);
                                        }}
                                    ></div>
                                    <img
                                        src={Moon}
                                        className={`${style.iconMoon}`}
                                        onClick={() => {
                                            props.setWhiteTheme(false);
                                        }}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                    <div className={style.crossX_container}>
                        <label for="menu_full">
                            <img
                                src={
                                    whiteTheme ? `${crossXblack}` : `${crossX}`
                                }
                                alt=""
                            />
                        </label>
                    </div>
                </div>
            </div>
            {/* Navigation - tablet */}
            <div className={style.navi_tablet}>
                <div
                    className={
                        whiteTheme
                            ? `${style.navigation_container}`
                            : `${style.navigation_container_black}`
                    }
                >
                    <span className={style.navi_name}>
                        <Link to="/" className={style.link}>
                            Thanh Tai
                        </Link>
                    </span>
                    <div className={style.navi_content}>
                        <span>
                            <Link to="/" className={style.link}>
                                Blogs
                            </Link>
                        </span>
                        <span>
                            <Link to="/projects" className={style.link}>
                                Projects
                            </Link>
                        </span>
                        <span>
                            <Link to="/about" className={style.link}>
                                About
                            </Link>
                        </span>
                        <span>
                            <Link to="/newsletter" className={style.link}>
                                Newsletter
                            </Link>
                        </span>
                        <div className={style.icon_container}>
                            <img
                                src={Sun}
                                className={`${style.iconSun}`}
                                onClick={() => {
                                    props.setWhiteTheme(true);
                                }}
                            />
                            <img
                                src={Moon}
                                className={`${style.iconMoon}`}
                                onClick={() => {
                                    props.setWhiteTheme(false);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Navigation - PC */}
            <div className={style.navi_PC}>
                <div
                    className={
                        whiteTheme
                            ? `${style.navigation_container}`
                            : `${style.navigation_container_black}`
                    }
                >
                    <span className={style.navi_name}>
                        <Link to="/" className={style.link}>
                            Thanh Tai
                        </Link>
                    </span>
                    <div className={style.navi_content}>
                        <span>
                            <Link to="/" className={style.link}>
                                Blogs
                            </Link>
                        </span>
                        <span>
                            <Link to="/projects" className={style.link}>
                                Projects
                            </Link>
                        </span>
                        <span>
                            <Link to="/about" className={style.link}>
                                About
                            </Link>
                        </span>
                        <span>
                            <Link to="/newsletter" className={style.link}>
                                Newsletter
                            </Link>
                        </span>
                        <div className={style.icon_container}>
                            {whiteTheme ? (
                                <>
                                    <img
                                        src={Sun2}
                                        onClick={() => {
                                            props.setWhiteTheme(true);
                                        }}
                                    />
                                    <div
                                        className={`${style.iconMoon}`}
                                        onClick={() => {
                                            props.setWhiteTheme(false);
                                        }}
                                    ></div>
                                </>
                            ) : (
                                <>
                                    <div
                                        className={style.iconSun_black}
                                        onClick={() => {
                                            props.setWhiteTheme(true);
                                        }}
                                    ></div>
                                    <img
                                        src={Moon}
                                        onClick={() => {
                                            props.setWhiteTheme(false);
                                        }}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Navigation;

{
    /* <div className={style.navi_content_middle}> */
}
//     <span>Blogs</span>
//     <span>Projects</span>
//     <span>About</span>
//     <span>Newsletter</span>

//     <div className={style.icon_container}>
//         <img
//             src={Sun}
//             alt=""
//             className={`${style.iconSun} ${style.offLarge}`}
//         />
//         <img
//             src={Moon}
//             alt=""
//             className={`${style.iconMoon} ${style.offLarge}`}
//         />
//         {/*  */}
//         {whiteTheme ? (
//             <img
//                 src={Sun2}
//                 alt=""
//                 className={`${style.iconSun} ${style.offMiddle}`}
//                 onClick={() => {
//                     props.setWhiteTheme(true);
//                 }}
//             />
//         ) : (
//             <div
//                 className={style.iconSun_black}
//                 onClick={() => {
//                     props.setWhiteTheme(true);
//                 }}
//             ></div>
//         )}

//         {whiteTheme ? (
//             <div
//                 className={`${style.iconMoon} ${style.offMiddle}`}
//                 onClick={() => {
//                     props.setWhiteTheme(false);
//                 }}
//             ></div>
//         ) : (
//             <img
//                 src={Moon}
//                 alt=""
//                 className={style.iconMoon_black}
//             />
//         )}
//     </div>
// </div>
