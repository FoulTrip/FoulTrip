"use client";

import styles from "./styles/project01.module.css";

import { IoLogoGithub } from "react-icons/io";
import logoWebwhatsapp from "../../assets/whatsap-web-js.png";

import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import Image from "next/image";
import { TbWorldShare } from "react-icons/tb";
import { useRouter } from "next/navigation";

function Project03() {
  const router = useRouter();
  return (
    <>
      <div className={styles.container_card}>
        <div className={styles.statusProject}>
          <div className={styles.centerStatusPj}>
            <div className={styles.pointBox}>
              <div></div>
            </div>
            <p>In constant development</p>
          </div>
        </div>
        <div className={styles.headerCard}>
          <div className={styles.container_code}>
            <h2 className={styles.typeText}>Bot Whatsapp</h2>
            <div className={styles.boxGithub}>
              {/* <div className={styles.centerIcon}>
                <TbWorldShare className={styles.iconGithub} size={25} />
              </div> */}
              <div className={styles.centerIcon}>
                <IoLogoGithub
                  className={styles.iconGithub}
                  size={25}
                  onClick={() =>
                    router.push(
                      "https://github.com/FoulTrip/whatsapp_automatitization"
                    )
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
            Using the whatsapp-web.js library. This bot automates the sending of
            messages to customers, allowing companies to improve their
            efficiency and speed of communication. The bot can be programmed to
            send personalized messages based on different triggers or events,
            which facilitates interaction with customers and improves the user
            experience. In this I show how it can be configured both in the
            backend and to use it also in the frontend using websockets.
          </p>
        </div>
      </div>
    </>
  );
}

export default Project03;
