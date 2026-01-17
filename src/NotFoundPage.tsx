import styles from "./NotFoundPage.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div style={{width:"100dvw", height:"100dvh", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div className={styles.container}>
                <span className={styles.title_container}>
                    Hey! So, that page doesn't exist...
                </span>
                <Link style={{textDecoration: "inherit", color: "inherit"}} to={"/"} className={styles.home_button}>
                    <AiOutlineArrowLeft className={styles.arrow}/>
                    Back to safety
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;