import Advertisement from "./Advertisement";
import Subcontent from "./Subcontent";
import style from "../css/MainContent.module.css";

const MianContent = () => {
    return (
        <div className={style.main}>
            <div>
                <Subcontent />
                <Subcontent />
                <Subcontent />
            </div>
            <Advertisement />
        </div>
    )
}

export default MianContent;