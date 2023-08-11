import Image from "next/image";
import Link from "next/link";
import large_golf_ball from "/public/images/large-golf-ball.png";
import tennis_ball from "/public/images/facility/tennis-ball.jpg";
import { GiTennisCourt } from 'react-icons/gi';
import { MdSportsTennis } from 'react-icons/md';
import { SiScikitlearn } from 'react-icons/si';
import { LiaHandsHelpingSolid, LiaChalkboardTeacherSolid} from 'react-icons/lia';

const Facility = () => {
  return (
    <section
      className="section facility facility--secondary wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section__header">
              <h5 className="section__header-sub-title">Facility</h5>
              <h2 className="section__header-title">Our tennis club offers.</h2>
              <p>
              Experience top-notch tennis facilities featuring state-of-the-art courts, clubhouse amenities, and a vibrant tennis community.
              </p>
              {/* <div className="section__header-cta">
                <Link
                  href="/facility"
                  className="cmn-button cmn-button--secondary"
                >
                  See All Facility
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        <div className="row section__row align-items-center">
          <div className="col-sm-6 col-lg-4 col-xxl-3 section__col">
            <div className="facility--secondary__cards">
              <div className="facility__card">
                <div className="facility__card-icon">
                  <i className=""><GiTennisCourt /></i>
                </div>
                <div className="facility__card-content">
                  <h5>
                    <Link href="/">Tennis court rent</Link>
                  </h5>
                  <p className="secondary-text">
                  Experience the thrill of tennis on our well-maintained courts available for rent.
                  </p>
                </div>
              </div>
              <div className="facility__card">
                <div className="facility__card-icon">
                  <i className=""><MdSportsTennis /></i>
                </div>
                <div className="facility__card-content">
                  <h5>
                    <Link href="/">Personal Trainings</Link>
                  </h5>
                  <p className="secondary-text">
                  Achieve your fitness goals with personalized training sessions tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xxl-6 section__col d-none d-lg-block">
            <div className="facility--secondary__thumbs text-center">
              <Image src={tennis_ball} alt="Image" />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3 section__col">
            <div className="facility--secondary__cards">
              <div className="facility__card">
                <div className="facility__card-icon">
                  <i className=""><LiaChalkboardTeacherSolid /></i>
                </div>
                <div className="facility__card-content">
                  <h5>
                    <Link href="/">Children's Courses</Link>
                  </h5>
                  <p className="secondary-text">
                  Enroll your child in our exciting courses designed to foster creativity and personal growth.
                  </p>
                </div>
              </div>
              <div className="facility__card">
                <div className="facility__card-icon">
                  <i className=""><LiaHandsHelpingSolid /></i>
                </div>
                <div className="facility__card-content">
                  <h5>
                    <Link href="/">Support</Link>
                  </h5>
                  <p className="secondary-text">
                  Get reliable support from our skilled team to resolve issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facility;
