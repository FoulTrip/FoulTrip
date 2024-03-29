"use client";

import styles from "./styles/project01.module.css";

import { IoIosCog, IoLogoGithub } from "react-icons/io";
import logoWebwhatsapp from "../../assets/whatsap-web-js.png";

import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb, SiPrisma } from "react-icons/si";
import Image from "next/image";
import { MdCss, MdHtml } from "react-icons/md";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandNextjs, TbWorldShare } from "react-icons/tb";
import { useRouter } from "next/navigation";

function Project04() {
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
            <h2 className={styles.typeText}>Ecommerce</h2>
            <div className={styles.boxGithub}>
              {/* <div className={styles.centerIcon}>
                <TbWorldShare
                  className={styles.iconGithub}
                  size={25}
                  onClick={() =>
                    router.push("")
                  }
                />
              </div> */}
              <div className={styles.centerIcon}>
                <IoLogoGithub
                  className={styles.iconGithub}
                  size={25}
                  onClick={() =>
                    router.push("https://github.com/FoulTrip/Ecommerce")
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
              <SiPrisma size={30} className={styles.iconPrisma} />
              <SiMongodb size={30} className={styles.iconMongo} />
            </div>
          </div>
        </div>

        <div className={styles.descCard}>
          <h3>Description</h3>
          <p>
            Sistema de comercio electrónico con Next.js, TypeScript, Prisma y
            MongoDB. Estructura robusta y segura. Tipificación mejorada con
            TypeScript, seguridad de contraseñas con bcrypt, operaciones de base
            de datos con Prisma para MongoDB. Autenticación mediante tokens JWT.
            Código organizado en módulos y clases. Documentación detallada para
            operaciones de usuarios, tokens JWT, revisiones, calificaciones,
            productos, pedidos y carritos. Modelo de datos en Prisma diseñado
            para comercio electrónico en MongoDB.
          </p>
        </div>
      </div>
    </>
  );
}

export default Project04;
