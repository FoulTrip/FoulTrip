"use client";

import Navbar from "@/components/navbar/NavBar";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import axios from "axios";

import { MdSecurity } from "react-icons/md";
import { RxCode } from "react-icons/rx";

interface topics {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: string;
}

function Blog() {
  const [topics, setTopics] = useState<topics[] | null>(null);

  useEffect(() => {
    const getTopics = async () => {
      const response = await axios.get("/api/topics");
      const data = response.data;
      //   console.log(data);
      setTopics(data.temas);
    };

    getTopics();
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.boxBlog}>
        <h1 className={styles.boxComing}>Learning topics</h1>
        <div className={styles.containerTopics}>
          {topics?.map((topic) => (
            <div
              key={topic.id}
              className={styles.baseCard}
              {...(topic.categoria == "ciberseguridad"
                ? { style: { border: "3px solid red", borderRadius: "10px" } }
                : null)}
              {...(topic.categoria == "programming"
                ? { style: { border: "3px solid grey", borderRadius: "10px" } }
                : null)}
            >
              <div
                className={styles.boxLengh}
                {...(topic.categoria == "ciberseguridad"
                  ? { style: { background: "red", color: "yellow" } }
                  : null)}
                {...(topic.categoria == "programming"
                  ? { style: { background: "grey", color: "white" } }
                  : null)}
              >
                <p>
                  {topic.categoria == "ciberseguridad" ? <MdSecurity /> : null}
                  {topic.categoria == "programming" ? <RxCode /> : null}
                </p>
              </div>
              <div className={styles.boxInfo}>
                <h3 className={styles.title}>{topic.titulo}</h3>
                <p className={styles.desc}>{topic.descripcion}</p>
              </div>
              <div className={styles.boxInfoBnts}>
                <div className={styles.listOpcs}>
                  <p>PP</p>
                  <p>PDF</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
