import styles from "./styles/project01.module.css";

import { IoLogoGithub } from "react-icons/io";
import logoWebwhatsapp from "../../assets/whatsap-web-js.png";

import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import Image from "next/image";
import { TbWorldShare } from "react-icons/tb";

function Project03() {
  return (
    <>
      <div className={styles.container_card}>
        <div className={styles.headerCard}>
          <div className={styles.container_code}>
            <h2 className={styles.typeText}>Bot Whatsapp</h2>
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
              <div style={{ display: "grid", placeContent: "center" }}>
                <BiLogoTypescript size={30} className={styles.iconts} />
              </div>
              <div style={{ display: "grid", placeContent: "center" }}>
                <SiMongodb size={30} className={styles.iconMongo} />
              </div>
              <div style={{ display: "grid", placeContent: "center" }}>
                <Image
                  src={logoWebwhatsapp}
                  style={{ width: "40px", height: "auto" }}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.descCard}>
          <h3>Description</h3>
          <p>
            Utilizando la biblioteca whatsapp-web.js. Este bot automatiza el
            envío de mensajes a los clientes, lo que permite a las empresas
            mejorar su eficiencia y rapidez en la comunicación. El bot puede ser
            programado para enviar mensajes personalizados basados en distintos
            gatillos o eventos, lo que facilita la interacción con los clientes
            y mejora la experiencia del usuario. en este muestro como se puede
            configurar tanto en el backend como para usarlo tambien en el
            frontend utilizando websockets
          </p>
        </div>
      </div>
    </>
  );
}

export default Project03;
