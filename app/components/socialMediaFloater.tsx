"use client";

import styles from "../styles/global.module.css";
import {Divider} from "@mui/material";
import {FaGithub, FaInstagram, FaYoutube} from "react-icons/fa";

export default function SocialMediaFloater() {
	return (
		<div className={`${styles.highlight_border} ${styles.floating} flex space-y-3 flex-col p-3`}>
			<span className={`w-full flex justify-center text-2xl`}>Social Media</span>

			<Divider orientation={"horizontal"} flexItem variant={"middle"} style={{backgroundColor: "rgba(var(--shine-color-raw), 0.5)", height: 1}}/>

			<div className={`flex max-sm:flex-col space-x-10 max-sm:space-y-3 max-sm:pt-3 p-5 pb-3 text-xl text-center justify-center items-center max-sm:items-start ${styles.center_content_a}`}>
				<a href={"https://www.github.com/tobiazsh"}><FaGithub /> GitHub</a>
				<a href={"https://www.instagram.com/tobizsh"}><FaInstagram /> Instagram</a>
				<a href={"https://www.youtube.com/@tobiazsh"}><FaYoutube /> YouTube</a>
			</div>

		</div>
	);
}