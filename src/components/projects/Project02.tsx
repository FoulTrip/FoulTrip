"use client";

import styles from "./styles/project01.module.css";

import { IoLogoGithub } from "react-icons/io";
import { MdHtml, MdCss } from "react-icons/md";

import { IoLogoReact } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbWorldShare } from "react-icons/tb";

import { IoIosCog } from "react-icons/io";
import { useRouter } from "next/navigation";

function Project02() {
  const router = useRouter();
  return (
    <>
      <div className={styles.container_card}>
        <div className={styles.statusProject}>
          <div className={styles.centerStatusPj}>
            <div className={styles.pointBox}>
              <IoIosCog size={15} />
            </div>
            <p>In development</p>
          </div>
        </div>
        <div className={styles.headerCard}>
          <div className={styles.container_code}>
            <h2 className={styles.typeText}>Landing Page</h2>
            <div className={styles.boxGithub}>
              <div className={styles.centerIcon}>
                <TbWorldShare
                  className={styles.iconGithub}
                  size={25}
                  onClick={() => router.push("https://oskargo.vercel.app/")}
                />
              </div>
              <div className={styles.centerIcon}>
                <IoLogoGithub
                  className={styles.iconGithub}
                  size={25}
                  onClick={() =>
                    router.push("https://github.com/FoulTrip/oscargo_app")
                  }
                />
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
