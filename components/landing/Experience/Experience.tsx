import { useTranslations } from "next-intl";
import CardExperience from "./cardExperience";

function Experience() {
    const t = useTranslations("Landing");


    return (
        <div className="mt-40">
            <h2 className="mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-blue-500">{t("Experience.title")}</h2>

            <CardExperience applicationKey={"Experience.application01"} />
            <CardExperience applicationKey={"Experience.application02"} />
            <CardExperience applicationKey={"Experience.application03"} />
        </div>
    );
}

export default Experience;
