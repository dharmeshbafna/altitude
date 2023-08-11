import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/banner.module.css";

type Props = {
  data: any;
};
const item = {
  hidden: {
    y: "100%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

function OtherInfo({ data }: Props) {
  return (
    <motion.div initial="hidden" animate={"visible"} className={styles.otherinfomain}>
      {/* <AnimatedText
        className={styles.otheinfoone}
        data={data?.location}
      /> */}
      <AnimatedText
        className={styles.otherinfotwo}
        data={data?.title}
      />
      <AnimatedText
        className={styles.otherinfothree}
        data={data?.description}
      />
    </motion.div>
  );
}

export default OtherInfo;

const AnimatedText = ({
  data,
  className,
}: {
  data?: string;
  className?: string;
}) => {
  return (
    <span
      style={{
        overflow: "hidden",
        display: "inline-block",
      }}
    >
      <motion.p className={` ${className}`} variants={item} key={data}>
        {data}
      </motion.p>
    </span>
  );
};
