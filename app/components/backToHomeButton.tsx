import styles from "@/app/styles/global.module.css";
import Link from "next/link";
import {FaArrowLeft} from "react-icons/fa";

export default function BackToHomeButton() {
	return (
		<div className={`top-0 absolute left-0 p-5`}>
			<Link href={"/"} className={`${styles.floating} ${styles.highlight_border} p-5 flex items-center`}>
				<FaArrowLeft className={`mr-3`}/>
				Back to Home
			</Link>
		</div>
	);
}