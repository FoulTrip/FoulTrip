"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import { IoLogoGithub } from "react-icons/io";
import { MdDocumentScanner } from "react-icons/md";
import Link from "next/link";
import Avatar from "react-avatar";
import { useRouter } from "next/navigation";
import Modal from "../modal/Modal";
import PdfView from "../pdfView/PdfView";

import { useMediaQuery } from "react-responsive";

function Navbar() {
  const router = useRouter();
  const [isOpen, setisOpen] = useState<boolean>(false);
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 700px)" });

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.imageLogo}>
            <Avatar
              src={"https://github.com/foultrip.png"}
              round={true}
              size="30"
            />
          </div>
          <Link href="/" className={styles.logoTitle}>
            FoulTrip
          </Link>
        </div>

        <div className={styles.account}>
          <div className={styles.subAccount}>
            <div className={styles.login}>
              <IoLogoGithub
                onClick={() => router.push("https://github.com/FoulTrip")}
                size={30}
              />
            </div>
            <div className={styles.loginCV}>
              <div
                className={styles.centerloginCv}
                onClick={() => {
                  isTabletOrMobile
                    ? router.push("/Curriculum_vitae.pdf")
                    : setisOpen(true);
                }}
              >
                <div className={styles.boxIcon}>
                  <MdDocumentScanner />
                </div>
                <p>CV</p>
              </div>
            </div>
            {!isTabletOrMobile ? (
              <Modal isOpen={isOpen} onClose={() => setisOpen(false)}>
                <PdfView />
                <div className={styles.boxPdf}>
                  <div className={styles.centerBoxPdf}>
                    <p>No puedes verlo? </p>
                    <button
                      onClick={() => router.push("/Curriculum_vitae.pdf")}
                    >
                      Visitar
                    </button>
                  </div>
                </div>
              </Modal>
            ) : null}
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
