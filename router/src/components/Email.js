import style from "../SCSS/Email.module.scss";
const Email = (props) => {
    const whiteTheme = props.whiteTheme;
    return (
        <section
            className={
                whiteTheme
                    ? `${style.newsletter_container}`
                    : `${style.newsletter_container_black}`
            }
        >
            <div className={style.newsletter_item_1}>
                <span>Newsletter</span>
            </div>
            <div className={style.newsletter_item_2}>
                <span>Stories and interviews</span>
            </div>
            <div className={style.newsletter_item_3}>
                <span>
                    Subscribe to learn about new product features, the latest in
                    technology, solutions, and updates.
                </span>
            </div>
            <div className={style.newsletter_item_4}>
                <div className={style.email_input}>
                    <input type="text" placeholder="Enter your email" />
                    <span>Subscribe</span>
                </div>
                <div className={style.policy_content}>
                    <span>We care about your data in our privacy policy</span>
                </div>
            </div>
        </section>
    );
};
export default Email;
