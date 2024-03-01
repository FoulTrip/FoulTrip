"use client";

import React from "react";
import styles from "./navbar.module.css";

import { IoLogoGithub } from "react-icons/io";
import { MdDocumentScanner } from "react-icons/md";

import Link from "next/link";
import Avatar from "react-avatar";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
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
              <div className={styles.centerloginCv}>
                <div className={styles.boxIcon}>
                  <MdDocumentScanner />
                </div>
                <p>CV</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
