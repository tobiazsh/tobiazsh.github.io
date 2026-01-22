import commonStyles from '/src/styles/common.module.css';
import styles from './ProjectCard.module.css';
import {Link} from "react-router-dom";

interface ProjectCardProps {
    projectName?: string;
    projectDescription?: string;
    imageUrl?: string;
    clickUrl?: string;
}

const ProjectCard =
    ({
        projectName = "Sample Project",
        projectDescription = "A project that projects the project onto the project from the other team",
        imageUrl,
        clickUrl = ""
    }: ProjectCardProps) => {
    return (
        <Link to={clickUrl} className={[commonStyles.highlight_border, styles.card].join(' ')}>
            <span className={styles.title}>{projectName}</span>
            <span>{projectDescription}</span>
            <span className={styles.img_container}>
                <img src={imageUrl} alt={projectName} className={styles.project_image} />
            </span>
        </Link>
    );
}

export default ProjectCard;