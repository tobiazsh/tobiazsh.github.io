import './App.module.css'
import styles from "./App.module.css"
import commons from "./styles/common.module.css"
import lillyPfp from "/lilly.jpg"

function App() {

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
            </div>
        </div>
    )
}

export default App
