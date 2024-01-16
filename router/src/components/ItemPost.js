import CategoryTag from "./CategoryTag.js";
const ItemPost = (props) => {
    const style = props.style;
    const Image = props.image;
    const subStyle = props.subStyle;
    const category = props.category;
    const objectItem = props.objectItem;
    return (
        <>
            <div className={subStyle}>
                <div className={style.image_container}>
                    <img src={objectItem.image} alt="" />
                </div>

                <div className={style.content_container}>
                    <div className={style.time_container}>
                        <span>{objectItem.author}</span>
                    </div>
                    <div className={style.title_container}>
                        <h3>{objectItem.title}</h3>
                        <span>{objectItem.previewContent}</span>
                    </div>
                    <div className={style.category_container}>
                        {objectItem.tags?.map((item, index) => (
                            <CategoryTag
                                key={index}
                                style={style}
                                text={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default ItemPost;
