import { useTranslations } from "next-intl";
import CardExperience from "./cardExperience";

function Experience() {
    const t = useTranslations("Landing");


    return (
        <div className="mt-32">
            <h2>{t("Experience.title")}</h2>

            <CardExperience applicationKey={"Experience.application01"} />
        </div>
    );
}

export default Experience;
