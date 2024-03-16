"use client";

import Navbar from "@/components/navbar/NavBar";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import axios from "axios";

import { MdSecurity } from "react-icons/md";
import { RxCode } from "react-icons/rx";
import { AiOutlineExpand } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface topics {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: string;
}

function Blog() {
  const [topics, setTopics] = useState<topics[] | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getTopics = async () => {
      const response = await axios.get("/api/topics");
      const data = response.data;
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
            <div key={topic.id} className={styles.baseCard}>
              <div
                className={styles.boxLengh}
                {...(topic.categoria == "ciberseguridad"
                  ? {
                      style: {
                        background: "#FF9494",
                        color: "yellow",
                        borderRadius: "10px",
                      },
                    }
                  : null)}
                {...(topic.categoria == "programming"
                  ? {
                      style: {
                        background: "#BDBDBD",
                        color: "white",
                        borderRadius: "10px",
                      },
                    }
                  : null)}
              >
                <p>
                  {topic.categoria == "ciberseguridad" ? (
                    <MdSecurity size={20} />
                  ) : null}
                  {topic.categoria == "programming" ? (
                    <RxCode size={20} />
                  ) : null}
                </p>
              </div>
              <div className={styles.boxInfo}>
                <h3 className={styles.title}>{topic.titulo}</h3>
                <p className={styles.desc}>{topic.descripcion}</p>
              </div>
              <div className={styles.boxExpand}>
                <div className={styles.btnCenter}>
                  <AiOutlineExpand
                    size={20}
                    onClick={() => router.push(`/blog/${topic.id}`)}
                  />
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
