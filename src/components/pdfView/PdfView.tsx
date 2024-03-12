"use client"

import React from "react";
import styles from "./pdfview.module.css";

function PdfView() {
  return (
    <>
      <object
        data="/Curriculum_vitae.pdf"
        type="application/pdf"
        width="100%"
        height="600px"
        className={styles.framePDF}
      >
      </object>
    </>
  );
}

export default PdfView;
