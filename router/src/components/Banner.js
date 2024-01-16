import style from "../SCSS/Banner.module.scss";
const Banner = (props) => {
    const whiteTheme = props.whiteTheme;
    return (
        <>
            <div
                className={
                    whiteTheme
                        ? `${style.banner_container}`
                        : `${style.banner_container_black}`
                }
            >
                <h1>THE BLOG</h1>
            </div>
        </>
    );
};
export default Banner;
