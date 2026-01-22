import ProjectCard from "../../components/ProjectCard.tsx";
import lillyPfp from "/lilly.jpg";
import styles from "./Projects.module.css";
import HomeButton from "../../components/HomeButton.tsx";

const Projects = () => {
    return (
        <div className={styles.container}>
            <span className={styles.home_button_container}>
                <HomeButton />
            </span>
            <h1>My Projects</h1>
            <div className={styles.projects_container}>
                <ProjectCard imageUrl={lillyPfp}/>
                <ProjectCard imageUrl={lillyPfp}/>
                <ProjectCard imageUrl={lillyPfp}/>
                <ProjectCard imageUrl={lillyPfp}/>
                <ProjectCard imageUrl={lillyPfp}/>
                <ProjectCard imageUrl={lillyPfp}/>
            </div>
        </div>
    )
}

export default Projects;