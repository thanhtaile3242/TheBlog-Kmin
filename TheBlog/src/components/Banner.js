import style from "../SCSS/Banner.module.scss";
const Banner = (props) => {
    const whiteTheme = props.whiteTheme;
    const title = props.title;
    return (
        <>
            <div
                className={
                    whiteTheme
                        ? `${style.banner_container}`
                        : `${style.banner_container_black}`
                }
            >
                <h1>{title}</h1>
            </div>
        </>
    );
};
export default Banner;
