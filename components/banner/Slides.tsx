import { Data } from "@/pages/test";
import React from "react";
import SliderCard from "./SliderCard";
import styles from '@/styles/banner.module.css';

type Props = {
  data: Data[];
};

function Slides({ data }: Props) {
  return (
    <div className={styles.slides}>
      {data.map((data) => {
        return <SliderCard key={data.img} data={data} />;
      })}
    </div>
  );
}

export default Slides;
