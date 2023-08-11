import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "@/components/banner/Header";
import BackgroundImage from "@/components/banner/BackgroundImage";
import Slides from "@/components/banner/Slides";
import SlideInfo from "@/components/banner/SlideInfo";
import Controls from "@/components/banner/Controls";
import styles from '@/styles/banner.module.css';

export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Test() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <main
      className={`${styles.righteousfont} ${styles.indexone}`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className={styles.indextwo}>
          {/* <Header /> */}
          <div className={styles.indexthree}>
            <div className={styles.indexfour}>
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className={styles.indexfive}>
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const sliderData = [
  {
    img: "/tennis-banner-2.jpg",
    location: "Ace Attack",
    description:
      "Embark on a transformative journey towards becoming a skilled and well-rounded tennis player under expert guidance.",
    title: "Ace Attack",
  },
  {
    img: "/tennis-banner-3.jpg",
    title: "Tennis Thrills",
    description:
      "Train with top-notch coaches and elevate your game to new heights at our prestigious tennis academy.",
    location: "Arizona",
  },
  {
    img: "/tennis-banner.jpg",
    title: "Master Class",
    description:
      "Nurture your talent and passion for tennis in a supportive and professional environment at our renowned academy.",
    location: "Kenya",
  },
  {
    img: "/tennis-banner-4.jpg",
    title: "Court Champion",
    description:
      "Embark on a transformative journey towards becoming a skilled and well-rounded tennis player under expert guidance.",
    location: "Cambodia",
  },
  {
    img: "/tennis-banner-5.jpg",
    title: "Dynamic Shots",
    description:
      "Immerse yourself in a world-class tennis program that focuses on technique, strategy, and physical conditioning for aspiring athletes.",
    location: "Indonesia",
  },
];

const initData = sliderData[0];
