import './App.module.css'
import styles from "./App.module.css"
import commonStyles from "./styles/common.module.css"
import lillyPfp from "/lilly.jpg"
import {C, CPlusPlus, CSharp, Java, React, TypeScript, ViteJS} from "developer-icons";
import {SiDotnet} from "react-icons/si";
import FloatingRedirect from "./components/FloatingRedirect.tsx";
import IconLink from "./components/IconLink.tsx";
import {FaGithub, FaInstagram, FaTiktok, FaYoutube} from "react-icons/fa";

function App() {

    const age = () => {
        const current = new Date();
        const bday = new Date("2009-10-08");

        let age = current.getFullYear() - bday.getFullYear();
        if (
            current.getMonth() > bday.getMonth() ||
            (current.getMonth() == bday.getMonth() && current.getDate() >= bday.getDate())
        ) {
            return age;
        }

        return age - 1;
    }

    return (
        <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center"}}>
            <div className={[styles.main_card, commonStyles.highlight_border].join(" ")} style={{fontSize: 24}}>
                <span className={styles.title}>
                    Hello, there!
                </span>
                <hr/>
                <span>
                    <span className={styles.pfp}>
                        <img src={lillyPfp}
                             alt={"My cat lillyPfp: Yellow-ish eyes, white and fluffy fur with black spot on head. Looking into camera with open mouth and tilted head."}
                             style={{width: "100%", height: "100%"}}/>
                    </span>
                    <p>
                        I am Tobias (aka. Tobiazsh). A {age()}-year-old hobby developer!
                    </p>
                    <p>
                        I love learning new stuff and challenging myself.<br/>
                        More than often, I just do it, even if it seems hard at first.
                    </p>
                    <p>
                        I develop Minecraft mods, websites and desktop apps in my free time.<br/>
                        I use the following technologies for that stuff:
                        <ul className={styles.techlist}>
                            <li>
                                <Java size={30}/>
                                for Minecraft Mods
                            </li>
                            <li>
                                <TypeScript size={30}/><ViteJS size={30}/><React size={30}/>
                                for Websites
                            </li>
                            <li>
                                <CSharp size={30}/><SiDotnet/>
                                for Desktop Apps
                            </li>
                            <li>
                                <C size={30}/>/<CPlusPlus size={30}/>
                                when I'm bored
                            </li>
                        </ul>
                    </p>
                </span>
                <span className={[commonStyles.highlight_border, styles.basic_grid_pane].join(' ')}>
                        Want to see what I've made so far? — Feel free to check out my projects!
                        <FloatingRedirect to={"/projects"} className={styles.button}>
                            View My Projects
                        </FloatingRedirect>
                    </span>
                <span className={[commonStyles.highlight_border, styles.basic_grid_pane].join(' ')}>
                        Check out my social media!
                        <span className={styles.social_medias}>
                            <IconLink link={"https://github.com/tobiazsh"} as={FaGithub}/>
                            <IconLink link={"https://www.instagram.com/tobizsh/"} as={FaInstagram}/>
                            <IconLink link={"https://www.tiktok.com/@tobizsh"} as={FaTiktok}/>
                            <IconLink link={"https://www.youtube.com/@tobiazsh"} as={FaYoutube}/>
                        </span>
                    </span>
                <FloatingRedirect to={"/contact"} className={styles.button} variant={"secondary"}>
                    Contact Me
                </FloatingRedirect>
            </div>
        </div>
    )
}

export default App
