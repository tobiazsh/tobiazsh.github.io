import styles from "./styles/global.module.css";
import "./styles/globals.css";
import SocialMediaFloater from "@/app/components/socialMediaFloater";

export default function Home() {
  return (
    <div className={`w-[100dvw] flex justify-center md:p-10 p-3 text-xl`}>
      <div className={`${styles.highlight_border} lg:w-2/3 ${styles.floating} p-10 flex flex-col space-y-10`}>
        <span className={`text-5xl font-semibold`}>
          Hello!
        </span>



        <div className={`w-2/3`}>
          <p>I&#39;m Tobias, a 15 year old hobby developer from Austria.</p><br/>
          <p>I love creating new things and learning new skills. I do thing on my own when something is too slow for me or doesn&#39;t exist yet.</p><br/>
          <p>I primarily work with Java and TypeScript, but I also have experience with C/C++ and C#!</p><br/>
          <p>I do mainly Minecraft modding via Fabric in my free time, but I have also worked with GUI applications (ImGui & Qt) and web development (NextJS).</p><br/>
        </div>

        <span>
          I speak 4 languages:<br/>
          <table style={{borderSpacing: 10, borderCollapse: "separate"}}>
            <tbody>
            <tr><td>🇩🇪🇦🇹</td><td>German (native)</td></tr>
            <tr><td>🇬🇧 </td><td>English (fluent)</td></tr>
            <tr><td>🇪🇸</td><td>Spanish (~B1)</td></tr>
            <tr><td>🇮🇹</td><td>Italian (~A2)</td></tr>
            </tbody>
          </table>
        </span>

        <span className={`${styles.blue_links}`}>
          I currently work as a hobby developer at
          <a href={"https://www.snackbag.net/"}> SnackBag </a>
          and
          <a href={"https://studio.snackbag.net/"}> SnackBag Studios</a>!
        </span>

        <SocialMediaFloater />
      </div>
    </div>
  );
}
