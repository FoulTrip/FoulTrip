"use client";

import styles from "./skills.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useMediaQuery } from "react-responsive";

import { IoLogoCss3, IoLogoHtml5, IoLogoPython } from "react-icons/io";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

function SlideComponent() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 800 });

  return (
    <div className={styles.AboutProduct}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={isTabletOrMobile ? 30 : 70}
        slidesPerView={isTabletOrMobile ? 3 : 5}
        autoplay={{
          delay: 2500,
          // disableOnInteraction: false,
        }}
      >
        <SwiperSlide className={styles.iconSlide}>
          <IoLogoHtml5
            size={isTabletOrMobile ? 100 : 120}
            className={styles.iconHtml}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.iconSlide}>
          <IoLogoCss3
            size={isTabletOrMobile ? 100 : 120}
            className={styles.iconCss}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.iconSlide}>
          <RiJavascriptFill
            size={isTabletOrMobile ? 100 : 120}
            className={styles.iconjs}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.iconSlide}>
          <BiLogoTypescript
            size={isTabletOrMobile ? 100 : 120}
            className={styles.iconts}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.iconSlide}>
          <FaReact
            size={isTabletOrMobile ? 100 : 120}
            className={styles.iconReact}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.iconSlide}>
          <TbBrandNextjs
            size={isTabletOrMobile ? 100 : 120}
            className={styles.iconNext}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.iconSlide}>
          <BiLogoMongodb
            size={isTabletOrMobile ? 100 : 120}
            className={styles.iconMongo}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.iconSlide}>
          <FaGitAlt
            size={isTabletOrMobile ? 100 : 120}
            className={styles.iconGit}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.iconSlide}>
          <IoLogoPython
            size={isTabletOrMobile ? 100 : 120}
            className={styles.iconpy}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SlideComponent;
