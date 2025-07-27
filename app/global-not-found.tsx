import BackToHomeButton from "@/app/components/backToHomeButton";
import Image from "next/image";

export default function GlobalNotFound() {
    return (
        <div className={`w-[100dvw] h-[100dvh]`}>
            <BackToHomeButton />

            <div className={`w-full h-full flex justify-center items-center gap-20 max-md:flex-col`}>
                <div className={`h-[20rem] aspect-[1451/1200] relative flex justify-center items-center`}>
                    <Image
                        src={"/not-found.png"}
                        alt={"A cat with a confused face and question marks around it."}
                        fill={true}
                    />
                </div>

                <span className={`text-4xl font-bold`}>Page Not Found</span>
            </div>

        </div>
    );
}