"use client";

import Link from "next/link";
import styles from "./styles/AboutSection.module.css";

import Avatar from "react-avatar";
import SlideComponent from "./Slides/Skills";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

function AboutSection() {
  return (
    <>
      <div className={styles.boxText}>
        <div className={styles.boxImageText}>
          <div className={styles.text_aboutme}>
            <div className={styles.aboutCenterme}>
              <h1 className={styles.titleAbout}>ABOUT ME</h1>
              <p>
                My passion lies in building end-to-end software solutions. My my
                experience in front-end and back-end technologies allows me to
                take ideas from concept to implementation. ideas from concept to
                implementation. My goal is to use my skills to develop efficient
                and innovative software innovative software that meets user
                needs and exceeds client expectations. client's expectations.
              </p>
              <div className={styles.btns}>
                <Link
                  href="https://github.com/FoulTrip"
                  className={styles.btnVisitGit}
                >
                  <div className={styles.boxIconBtn}>
                    <IoLogoGithub size={20} />
                  </div>
                  <p className={styles.textBtn}>Github</p>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/foultrip/"
                  className={styles.btnVisitLink}
                >
                  <div className={styles.boxIconBtn}>
                    <IoLogoLinkedin size={20} />
                  </div>
                  <p className={styles.textBtn}>Linkedin</p>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.boxAvatar}>
            <Avatar
              src={"https://github.com/foultrip.png"}
              round={true}
              size="300px"
            />
          </div>
        </div>

        <div className={styles.skillsContainer}>
          <h1 className={styles.titleSkills}>TECHNOLOGIES</h1>
          <SlideComponent />
        </div>
      </div>
    </>
  );
}

export default AboutSection;
