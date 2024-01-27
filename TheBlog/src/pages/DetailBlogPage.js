import { useState } from "react";
import Navigation from "../components/Navigation.js";
import Footer from "../components/Footer.js";
import ItemPost from "../components/ItemPost.js";
import Email from "../components/Email.js";
import recent2 from "../assets/recent2.png";
import BlogContent from "../components/BlogContent.js";
import style from "../SCSS/DetailBlogPage.module.scss";
import imageCover from "../assets/coverDetail.png";
import imageDetail from "../assets/detail1.png";
import { useOutletContext } from "react-router-dom";
const ListRecentBlog = [
    {
        image: recent2,
        author: "Olivia Rhye • 1 Jan 2023",
        title: "UX review presentations",
        previewContent:
            "How do you create compelling presentations that wow your colleagues and impress your managers? Messi và Haaland nhận được số điểm bằng nhau dựa trên phiếu bầu từ các nhà báo, người hâm mộ, đội trưởng và HLV đội tuyển quốc gia. Tuy nhiên, siêu sao người Argentina giành chiến thắng nhờ nhận được nhiều hơn số phiếu bầu từ các đội trưởng đội tuyển quốc gia. Đồng đội cũ của Messi ở PSG là Mbappe đứng thứ ba",
        tags: ["Design", "Presentation"],
    },
    {
        image: recent2,
        author: "Phoenix Baker • 1 Jan 2023 ompelling presentations that wow your coll ompelling presentations that wow your coll",
        title: "Migrating to Linear 101 and nhận được số điểm bằng nhau dựa trên ",
        previewContent:
            "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to Theo kết quả bình chọn, Messi và Haaland nhận được số điểm bằng nhau dựa trên phiếu bầu từ các nhà báo, người hâm mộ, đội trưởng và HLV đội tuyển quốc gia. Tuy nhiên, siêu sao người Argentina giành chiến thắng nhờ nhận được nhiều hơn số phiếu bầu từ các đội trưởng đội tuyển quốc gia. Đồng đội cũ của Messi ở PSG là Mbappe đứng thứ ba.",
        tags: ["Design", "Research", "Research"],
    },
    {
        image: recent2,
        author: "Lana Steiner • 1 Jan 2023",
        title: "Building your API Stack",
        previewContent:
            "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
        tags: ["Design", "Research"],
    },
    {
        image: recent2,
        author: "Olivia Rhye • 1 Jan 2023",
        title: "Grid system for better Design User Interface",
        previewContent:
            "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate...",
        tags: ["Design", "Interface"],
    },
    {
        image: recent2,
        author: "Olivia Rhye • 1 Jan 2023",
        title: "Grid system for better Design User Interface",
        previewContent:
            "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate...",
        tags: ["Design", "Interface"],
    },
];
const DetailBlogPage = () => {
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
                <section className={style.detail_blog_container}>
                    <div className={style.recent_blog_container}>
                        <div className={style.recent_blog_title}>
                            <h2>Recent blog posts</h2>
                        </div>
                        <div className={style.recent_blog_list}>
                            <ItemPost
                                style={style}
                                subStyle={style.recent_blog_item}
                                objectItem={ListRecentBlog[0]}
                            />
                            <ItemPost
                                style={style}
                                subStyle={style.recent_blog_item}
                                objectItem={ListRecentBlog[0]}
                            />
                            <ItemPost
                                style={style}
                                subStyle={style.recent_blog_item}
                                objectItem={ListRecentBlog[0]}
                            />
                            <ItemPost
                                style={style}
                                subStyle={style.recent_blog_item}
                                objectItem={ListRecentBlog[0]}
                            />
                            <ItemPost
                                style={style}
                                subStyle={style.recent_blog_item}
                                objectItem={ListRecentBlog[0]}
                            />
                        </div>
                    </div>
                    <div className={style.blog_content_container}>
                        <BlogContent
                            whiteTheme={whiteTheme}
                            imageCover={imageCover}
                            imageDetail={imageDetail}
                        />
                        <div className={style.email_container}>
                            <Email whiteTheme={whiteTheme} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default DetailBlogPage;
