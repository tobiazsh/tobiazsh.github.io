import ProjectCard from "../../components/ProjectCard.tsx";
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
                <ProjectCard imageUrl={"/mwta_banner.png"}
                             projectName={"MyWorld Traffic Addition"}
                             projectDescription={"A Minecraft Mod that allows you to create 100% customisable and real-looking traffic signs."}
                             clickUrl={"https://modrinth.com/mod/myworld-traffic-addition"}/>
            </div>
        </div>
    )
}

export default Projects;