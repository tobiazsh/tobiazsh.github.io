import './App.module.css'
import styles from "./App.module.css"
import commons from "./styles/common.module.css"
import lillyPfp from "/lilly.jpg"
import {C, CPlusPlus, CSharp, Java, React, TypeScript, ViteJS} from "developer-icons";
import {SiDotnet} from "react-icons/si";

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
            <div className={[styles.main_card, commons.highlight_border].join(" ")}>
                <span className={styles.title}>
                    Hello, there!
                </span>
                <span className={styles.pfp}>
                    <img src={lillyPfp}
                         alt={"My cat lillyPfp: Yellow-ish eyes, white and fluffy fur with black spot on head. Looking into camera with open mouth and tilted head."}
                         style={{width: "100%", height: "100%"}}/>
                </span>
                <div style={{fontSize: 25}}>
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
                </div>
            </div>
        </div>
    )
}

export default App
