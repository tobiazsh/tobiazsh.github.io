import BackToHomeButton from "@/app/components/backToHomeButton";
import ProjectsPane from "@/app/components/projectsPane";

export default function ProjectsPage() {
	return (
		<div className={`pb-15`}>
			<BackToHomeButton />

			<div className={`w-full h-full pt-[10dvh] flex items-center flex-col`}>
				<span className={`w-full flex justify-center text-5xl font-semibold p-15`}>
					Projects
				</span>

				<div className={`flex flex-wrap md:w-4/5 w-full gap-5 justify-center`}>
					<ProjectsPane
						uuid={"67d23663-c20a-40ce-8d91-c626112eb1d3"}
						name={"MyWorld Traffic Addition"}
						description={"A Minecraft Mod that adds normal and completely customizable traffic signs as well as other traffic utilities to the game."}
						createdAt={new Date("2024-08-13")}
					/>

					<ProjectsPane
						uuid={"a8df4cfc-99b7-410d-a94c-e167c8118ab8"}
						name={"Jengua"}
						description={"A Java language library that provides a simple and intuitive way to translate your Java application into multiple languages."}
						createdAt={new Date("2025-06-25")}
					/>
				</div>
			</div>
		</div>
	);
}