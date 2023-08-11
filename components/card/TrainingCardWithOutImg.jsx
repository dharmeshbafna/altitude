import Link from "next/link";
import { MdSportsTennis } from 'react-icons/md';

const TrainingCardWithOutImg = ({ data }) => {
  const { title, desc, icon } = data;
  return (
    <div className="training__slider-single">
      <div className="training__slider-single__thumb-small">
        {/* <i className={icon}></i> */}
        <i><MdSportsTennis /></i>
      </div>
      <div className="training__slider-single__content">
        <h5>
          <Link href="/training-details">{title}</Link>
        </h5>
        <p className="secondary-text">{desc}</p>
      </div>
    </div>
  );
};

export default TrainingCardWithOutImg;
