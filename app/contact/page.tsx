"use client";

import styles from "@/app/styles/global.module.css";
import {Divider} from "@mui/material";
import {FaDiscord, FaGithub} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import BackToHomeButton from "@/app/components/backToHomeButton";

export default function ContactPage() {
	return (
		<div className={`h-[100dvh] w-[100dvw] flex items-center justify-center p-5`}>

			<BackToHomeButton />

			<div className={`${styles.highlight_border} ${styles.floating} p-5 text-xl md:w-2/3`}>
				<span className={`w-full flex justify-center text-2xl`}>
					Contact
				</span>

				<Divider
					orientation={"horizontal"}
					flexItem
					style={{
						backgroundColor: "rgba(var(--shine-color-raw), 0.5)",
						height: 1,
						marginTop: 20,
						marginBottom: 20
					}}
				/>

				<span className={`flex justify-center`}>
					If you want to contact me for feedback, questions, problems or more information about the website (and me), you can do that via:
				</span>

				<div className={`flex w-full [&_a]:flex-1 ${styles.center_content_a} pt-5 pb-2 max-sm:flex-col max-sm:space-y-5`}>
					<a href={`https://www.discord.com/users/566693559420452915`}><FaDiscord /> Discord</a>
					<a href={`https://github.com/tobiazsh`}><FaGithub /> GitHub</a>
					<a href={`mailto:developer.tobiazsh@gmail.com`}><MdEmail /> E-Mail</a>
				</div>

			</div>
		</div>
	);
}