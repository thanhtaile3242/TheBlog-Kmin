import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
const Pagination = (props) => {
    const style = props.style;
    return (
        <>
            <div className={style.pagination_main}>
                <div className={style.page_btn}>
                    <img src={arrowLeft} alt="" />

                    <span>Previous</span>
                </div>
                <div className={style.list_page}>
                    <span className={style.active}>1</span>
                    <span className={style.default}>2</span>
                    <span className={style.default}>3</span>
                    <span>...</span>
                    <span className={style.default}>8</span>
                    <span className={style.default}>9</span>
                    <span className={style.default}>10</span>
                </div>
                <div className={style.page_btn}>
                    <span>Next</span>
                    <img src={arrowRight} alt="" />
                </div>
            </div>
        </>
    );
};

export default Pagination;
