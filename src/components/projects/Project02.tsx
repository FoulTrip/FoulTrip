import styles from "./styles/project01.module.css";

import { IoLogoGithub } from "react-icons/io";
import { MdHtml, MdCss } from "react-icons/md";

import { IoLogoReact } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";

function Project02() {
  return (
    <>
      <div className={styles.container_card}>
        <div className={styles.headerCard}>
          <div className={styles.mode_work}>
            <p className={styles.textMode}>Freelancer</p>
          </div>
          <div className={styles.container_code}>
            <p className={styles.typeText}>Landing Page</p>
            <div className={styles.boxGithub}>
              <IoLogoGithub className={styles.iconGithub} size={25} />
            </div>
          </div>
        </div>

        <div className={styles.techCard}>
          <h3>Technologies</h3>
          <div>
            <div className={styles.carrousell_ls}>
              <MdHtml size={30} className={styles.iconHtml} />
              <MdCss size={30} className={styles.iconCss} />
              <IoLogoReact size={30} className={styles.iconReact} />
              <BiLogoTypescript size={30} className={styles.iconts} />
              <TbBrandNextjs size={30} className={styles.iconNextjs} />
            </div>
          </div>
        </div>

        <div className={styles.descCard}>
          <h3>Description</h3>
          <p>
            Landing page para presentar los modelos de cargo bikes disponibles
            para la venta. La página incluye descripciones detalladas y visuales
            atractivos de cada modelo. Además, incorporé un botón que redirige a
            los usuarios a WhatsApp, facilitando la comunicación directa y
            rápida con el equipo de ventas.
          </p>
        </div>

        <div className="visit"></div>
      </div>
    </>
  );
}

export default Project02;
