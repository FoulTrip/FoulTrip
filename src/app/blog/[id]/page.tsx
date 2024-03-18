"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/NavBar";
import Image from "next/image";

function BlogByID({ params }: { params: { id: string } }) {
  const [content, setContent] = useState<Topic | undefined>(undefined);

  useEffect(() => {
    const getContent = async () => {
      const response = await axios.post("/api/content", {
        id: params.id,
      });
      const data: Topic = response.data.data;
      console.log(data);
      setContent(data);
    };

    getContent();
  }, [params.id]);

  console.log(content?.content.explain.imagenIntro);

  return (
    <>
      <Navbar />
      <div className={styles.boxContent}>
        <div className={styles.headerContent}>
          <h1 className={styles.titleTopic}>
            {content?.content?.Intro?.title}
          </h1>
          <p className={styles.date}>Creado el 18/03/2024</p>
        </div>

        <div className={styles.boxImageIntro}>
          <img
            className={styles.imgIntro}
            src={content?.content.explain.imagenIntro as string}
            alt="introImg"
          />
        </div>

        <div className={styles.intro}>
          <div className={styles.boxIntro}>
            <p className={styles.textIntro}>
              {content?.content?.Intro?.subText}
            </p>
            <ul className={styles.chIntro}>
              {content?.content.Intro.characteristics.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
            <p>{content?.content.Intro.finalText}</p>
          </div>
        </div>

        <div className={styles.nextXpline}>
          <img
            src={content?.content.explain.imagenIntro as string}
            alt="nextlogo"
            className={styles.nextExplineImg}
          />
        </div>
        <p>{content?.content.explain.description}</p>
        <ul className={styles.chIntro}>
          {content?.content.explain.characteristics.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default BlogByID;
