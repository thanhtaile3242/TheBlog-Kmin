const CategoryTag = (props) => {
    const style = props.style;
    const text = props.text;
    let color;
    if (text == "Presentation") {
        color = `${style.category_item} ${style.category_color_pink}`;
    }
    if (text === "Design") {
        color = `${style.category_item} ${style.category_color_purple}`;
    }
    if (text === "Research") {
        color = `${style.category_item} ${style.category_color_blue}`;
    }
    if (text === "Interface") {
        color = `${style.category_item} ${style.category_color_green}`;
    }

    return (
        <>
            <div className={color}>
                <span className={style.category_content}>{text}</span>
            </div>
        </>
    );
};
export default CategoryTag;
