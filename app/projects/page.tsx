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
					<ProjectsPane />
					<ProjectsPane />
					<ProjectsPane />
					<ProjectsPane />
					<ProjectsPane />
					<ProjectsPane />
				</div>
			</div>
		</div>
	);
}