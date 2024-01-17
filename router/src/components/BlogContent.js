import style from "../SCSS/BlogContent.module.scss";
import CategoryTag from "../components/CategoryTag.js";
const BlogContent = (props) => {
    const whiteTheme = props.whiteTheme;
    const imageCover = props.imageCover;
    const imageDetail = props.imageDetail;
    return (
        <>
            <div
                className={
                    whiteTheme
                        ? `${style.blog_content_main}`
                        : `${style.blog_content_main_black}`
                }
            >
                <div className={style.blog_content_author}>
                    <h2>Orlando Diggs • 1 Jan 2023</h2>
                </div>
                <div className={style.blog_content_title}>
                    <h1>Grid system for better Design User Interface</h1>
                </div>

                <img
                    className={style.blog_content_cover}
                    src={imageDetail}
                    alt=""
                />

                <div className={style.blog_content}>
                    <p>
                        A grid system is a design tool used to arrange content
                        on a webpage. It is a series of vertical and horizontal
                        lines that create a matrix of intersecting points, which
                        can be used to align and organize page elements. Grid
                        systems are used to create a consistent look and feel
                        across a website, and can help to make the layout more
                        visually appealing and easier to navigate.
                    </p>
                    <p>
                        If you've been to New York City and have walked the
                        streets, it is easy to figure out how to get from one
                        place to another because of the grid system that the
                        city is built on. Just as the predictability of a city
                        grid helps locals and tourists get around easily, so do
                        webpage grids provide a structure that guides users and
                        designers alike. Because of their consistent reference
                        point, grids improve page readability and scannability
                        and allow people to quickly get where they need to go.
                    </p>
                    <span>
                        Definition: A grid is made up of columns, gutters, and
                        margins that provide a structure for the layout of
                        elements on a page.
                    </span>
                    <img src={imageDetail} alt="" />
                    <p>
                        A grid system is a design tool used to arrange content
                        on a webpage. It is a series of vertical and horizontal
                        lines that create a matrix of intersecting points, which
                        can be used to align and organize page elements. Grid
                        systems are used to create a consistent look and feel
                        across a website, and can help to make the layout more
                        visually appealing and easier to navigate.
                    </p>
                    <img src={imageDetail} alt="" />
                    <span>
                        Definition: A grid is made up of columns, gutters, and
                        margins that provide a structure for the layout of
                        elements on a page.
                    </span>
                    <p>
                        A grid system is a design tool used to arrange content
                        on a webpage. It is a series of vertical and horizontal
                        lines that create a matrix of intersecting points, which
                        can be used to align and organize page elements. Grid
                        systems are used to create a consistent look and feel
                        across a website, and can help to make the layout more
                        visually appealing and easier to navigate.
                    </p>
                </div>
                <div className={style.category_container}>
                    <CategoryTag style={style} text={"Design"} />
                    <CategoryTag style={style} text={"Interface"} />
                </div>
            </div>
        </>
    );
};

export default BlogContent;
