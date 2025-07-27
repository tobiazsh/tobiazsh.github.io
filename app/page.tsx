import Link from "next/link";
import styles from "./styles/global.module.css";
import "./styles/globals.css";
import SocialMediaFloater from "@/app/components/socialMediaFloater";
import Image from "next/image";

export default function Home() {
  return (
    <div className={`w-[100dvw] flex justify-center md:p-10 p-3 text-xl`}>
      <div className={`${styles.highlight_border} lg:w-2/3 ${styles.floating} p-10 flex flex-col space-y-10 rounded-4xl!`}>
        <span className={`text-5xl font-semibold`}>
          Hello there!
        </span>

        <span className={`aspect-square md:w-1/4 w-1/2 relative ${styles.floating} rounded-3xl overflow-hidden`}>
          <Image
            src="/pfp.jpg"
            alt="Tobias' Profile Picture. White cat with black spots making a funny face."
            fill={true}
          />
        </span>

        <div className={`lg:w-2/3`}>
          <p>I&#39;m Tobias, a 15 year old hobby developer from Austria.</p><br/>
          <p>I love creating new things and learning new skills.</p><br/>
          <p>I primarily work with Java and TypeScript, but I also have experience in C+&#8288;+ and C#!</p><br/>
          <p>I do mainly Minecraft modding via Fabric in my free time, but I have also worked with GUI applications (ImGui & Qt) and web development (NextJS).</p>
        </div>

        <Link href={"/projects"} className={`text-center ${styles.highlight_border} ${styles.floating} ${styles.scale_on_hover} p-5 w-full text-2xl bg-(--primary)!`}>
          Discover my projects
        </Link>

        <SocialMediaFloater />

        <span className={`${styles.blue_links}`}>
          I currently work as a hobby developer at
          <a href={"https://www.snackbag.net/"}> SnackBag </a>
          and
          <a href={"https://studio.snackbag.net/"}> SnackBag Studios</a>!
        </span>

        <div>
          I speak ...<br/>
          <table style={{borderSpacing: 10, borderCollapse: "separate"}}>
            <tbody>
            <tr><td>🇩🇪🇦🇹</td><td>German (native)</td></tr>
            <tr><td>🇬🇧 </td><td>English (fluent)</td></tr>
            <tr><td>🇪🇸</td><td>Spanish (~B1)</td></tr>
            <tr><td>🇮🇹</td><td>Italian (~A2)</td></tr>
            </tbody>
          </table>
        </div>

        <Link href={"/contact"} className={`p-5 text-center ${styles.floating} ${styles.highlight_border} ${styles.scale_on_hover} text-2xl`}>
          Contact me
        </Link>

      </div>
    </div>
  );
}
