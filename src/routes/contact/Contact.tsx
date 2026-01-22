import commonStyles from '../../styles/common.module.css';
import styles from './Contact.module.css';
import {MdEmail} from "react-icons/md";
import {BsDiscord} from "react-icons/bs";
import HomeButton from "../../components/HomeButton.tsx";

const Contact = () => {
    return (
        <div className={styles.container}>
            <HomeButton style={{top: 0, left: 0, position: "absolute", margin: "20px"}}/>
            <div className={[commonStyles.highlight_border, styles.card].join(' ')}>
                Reach me at:
                <span className={styles.method_container}>
                    <a href={"mailto:developer.tobiazsh@gmail.com"}>
                        <MdEmail />
                        Email
                    </a>
                    <a href={"https://discord.com/users/566693559420452915"}>
                        <BsDiscord />
                        Discord
                    </a>
                </span>
            </div>
        </div>
    );
}

export default Contact;