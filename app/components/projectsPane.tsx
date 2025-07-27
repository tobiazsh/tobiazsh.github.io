"use client";

import styles from "@/app/styles/global.module.css";
import Image from "next/image";
import { useState } from "react";

interface ProjectsPaneProps {
	uuid: string;
	name: string;
	description: string;
	createdAt: Date;
}

export default function ProjectsPane({ uuid, name, description, createdAt }: ProjectsPaneProps) {
	const [imgSrc, setImgSrc] = useState(`/${uuid}.png`);

	return (
		<div className={`${styles.floating} ${styles.highlight_border} ${styles.scale_on_hover} w-[20rem] md:w-[25rem] lg:w-[35rem] aspect-[2/3] lg:aspect-[16/14] overflow-hidden cursor-pointer`}>
			<div className={`relative w-full h-1/2 overflow-hidden`}>
				<Image
					src={imgSrc}
					fill={true}
					style={{objectFit: "cover"}}
					alt={name}
					onError={() => setImgSrc("/no_thumbnail.png")}
				/>
			</div>
			<div className={`gap-2 p-5 	flex flex-col`}>
				<span className={`font-bold text-2xl`}>{name}</span>
				<span>{description}</span>
				<span className={`absolute p-5 bottom-0 left-0`}><strong>Created:</strong> {createdAt.toDateString()}</span>
			</div>
		</div>
	);
}