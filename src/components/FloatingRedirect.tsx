import styles from "/src/styles/common.module.css"
import componentStyles from "./FloatingRedirect.module.css"
import {Link} from "react-router-dom";
import type {ReactNode} from "react";

interface FloatingRedirectProps {
    children: ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
    to: string;
}

const FloatingRedirect = ({children, variant = "primary", className, to}: FloatingRedirectProps) => {

    const combinedClasses = `${styles.highlight_border} ${componentStyles[variant]} ${className} ${componentStyles.button}`.trim();

    return (
        <Link className={combinedClasses} to={to}>
            {children}
        </Link>
    );
}

export default FloatingRedirect;