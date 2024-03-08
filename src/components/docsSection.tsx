"use client"

import Image from "next/image";
import React from "react";
import styles from "./styles/DocsSection.module.css";

import iconDocs from "@/assets/model_docs.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from "next/navigation";

function DocsSection() {
  const router = useRouter();
  return (
    <>
      <div className={styles.DocSection}>
        <div className={styles.centerDocsSection}>
          <div className={styles.boxImg}>
            <Image src={iconDocs} alt="iconDoc" />
          </div>
          <div className={styles.bocText}>
            <div className={styles.centereBoxText}>
              <h3>Interesting topics to learn</h3>
              <div className={styles.btnVisit}>
                <p onClick={() => router.push("/blog")}>Visitar</p>
                <div className={styles.boxIconVisit}>
                  <IoIosArrowRoundForward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DocsSection;
