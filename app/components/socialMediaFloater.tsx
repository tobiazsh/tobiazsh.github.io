"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import styles from "../styles/global.module.css";
import {Divider} from "@mui/material";

export default function SocialMediaFloater() {
	return (
		<div className={`${styles.highlight_border} ${styles.floating} flex space-y-3 flex-col p-3`}>
			<span className={`w-full flex justify-center text-2xl`}>Social Media</span>

			<Divider orientation={"horizontal"} flexItem variant={"middle"} style={{backgroundColor: "rgba(var(--shine-color-raw), 0.5)", height: 1}}/>

			<div className={`flex max-sm:flex-col space-x-10 max-sm:space-y-3 max-sm:pt-3 p-5 pb-3 text-xl text-center justify-center items-center max-sm:items-start ${styles.center_content_span}`}>
				<a href={"https://www.github.com/tobiazsh"}><GitHubIcon/> GitHub</a>
				<a href={"https://www.instagram.com/tobizsh"}><InstagramIcon/> Instagram</a>
				<a href={"https://www.youtube.com/@tobiazsh"}><YouTubeIcon/> YouTube</a>
			</div>

		</div>
	);
}