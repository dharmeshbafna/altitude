import React from "react";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
import { IoMdBookmark } from "react-icons/io";
import { Data, CurrentSlideData } from "@/pages";
import styles from "@/styles/banner.module.css"

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {
  return (
    <>
      {/* <motion.span layout className={styles.sliderinfo} /> */}
      <OtherInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />
    </>
  );
}

export default SlideInfo;
