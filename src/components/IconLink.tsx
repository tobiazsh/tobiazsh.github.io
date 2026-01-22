import {type ElementType} from "react";
import {Link} from "react-router-dom";

interface IconLinkProps {
    as?: ElementType;
    link: string;
}

const IconLink = ({ as: Component = "span", link}: IconLinkProps) => {
    return (
        <Link style={{ textDecoration: 'inherit', color: 'inherit' }} to={link}>
            <Component/>
        </Link>
    );
}

export default IconLink;