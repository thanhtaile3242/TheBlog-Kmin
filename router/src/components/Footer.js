import style from "../SCSS/Footer.module.scss";
const Footer = (props) => {
    const whiteTheme = props.whiteTheme;
    return (
        <>
            <div className={style.footer}>
                <div
                    className={
                        whiteTheme
                            ? `${style.footer_container}`
                            : `${style.footer_container_black}`
                    }
                >
                    <div className={style.footer_item1}>
                        <span>Twiiter</span>
                        <span>Linkedln</span>
                        <span>Email</span>
                        <span>RSS feed</span>
                        <span>Add to Feedly</span>
                    </div>
                    <div className={style.footer_item2}>
                        <span>© 2023</span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Footer;
