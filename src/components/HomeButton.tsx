import {Link} from "react-router-dom";
import styles from "./HomeButton.module.css";
import commonStyles from "/src/styles/common.module.css";
import {AiOutlineArrowLeft} from "react-icons/ai";
import type {CSSProperties} from "react";

interface HomeButtonProps {
    className?: string;
    style?: CSSProperties;
}

const HomeButton = ({className, style, ...props}: HomeButtonProps) => {

    return (
        <Link to={"/"}
              className={[styles.home_button, commonStyles.highlight_border, className].join(' ')}
              {...props} style={style}>
            <AiOutlineArrowLeft /> Back to Home
        </Link>
    )
}

export default HomeButton;