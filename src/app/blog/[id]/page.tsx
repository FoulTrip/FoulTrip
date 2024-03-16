"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/NavBar";

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

  return (
    <>
      <Navbar />
      <div className={styles.boxContent}>
        <h1>{content?.content?.Intro?.title}</h1>
        <p>{content?.content?.Intro?.subText}</p>
      </div>
    </>
  );
}

export default BlogByID;
