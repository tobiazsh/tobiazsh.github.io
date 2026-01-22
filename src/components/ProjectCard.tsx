import commonStyles from '/src/styles/common.module.css';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    projectName?: string;
    projectDescription?: string;
    imageUrl?: string;
}

const ProjectCard =
    ({
        projectName = "Sample Project",
        projectDescription = "A project that projects the project onto the project from the other team",
        imageUrl
    }: ProjectCardProps) => {
    return (
        <div className={[commonStyles.highlight_border, styles.card].join(' ')}>
            <span className={styles.title}>{projectName}</span>
            <span style={{ padding: "20px" }}>{projectDescription}</span>
            <span className={styles.img_container}>
                <img src={imageUrl} alt={projectName} className={styles.project_image} />
            </span>
        </div>
    );
}

export default ProjectCard;