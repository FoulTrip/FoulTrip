import styles from "./styles/project01.module.css";

import { IoLogoGithub } from "react-icons/io";
import { MdHtml, MdCss } from "react-icons/md";
import { TbWorldShare } from "react-icons/tb";

import { IoLogoReact } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiPrisma, SiMongodb } from "react-icons/si";
import Image from "next/image";

import muxLogo from "@/assets/muxIcon.png";

function Project01() {
  return (
    <>
      <div className={styles.container_card}>
        <div className={styles.headerCard}>
          <div className={styles.container_code}>
            <h2 className={styles.typeText}>Aplicacion Web Full-Stack</h2>
            <div className={styles.boxGithub}>
              <div className={styles.centerIcon}>
                <TbWorldShare className={styles.iconGithub} size={25} />
              </div>
              <div className={styles.centerIcon}>
                <IoLogoGithub className={styles.iconGithub} size={25} />
              </div>
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
              <SiPrisma size={30} className={styles.iconPrisma} />
              <SiMongodb size={30} className={styles.iconMongo} />
              <div style={{ display: "grid", placeContent: "center" }}>
                <Image
                  src={muxLogo}
                  style={{ width: "40px", height: "auto" }}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.descCard}>
          <h3>Description</h3>
          <p className={styles.textCard}>
            TodoEnBici es una plataforma interactiva que permite a los usuarios
            interactuar con un cicloviajero en tiempo real. Implementé un
            sistema de seguimiento de ruta en vivo, un módulo de transmisión en
            vivo, un sistema de streaming para que los usuarios y el
            cicloviajero interactuen mediante comentarios y mas en el video
            streaming, tambien un reproductor de música para promocionar
            artistas emergentes. Todo esto se logró manteniendo las mejores
            prácticas de desarrollo y asegurando una experiencia de usuario
            fluida y atractiva
          </p>
        </div>

        <div className="visit"></div>
      </div>
    </>
  );
}

export default Project01;
