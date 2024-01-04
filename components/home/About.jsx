import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import about_modal from "/public/images/experience_img_2.jpg";
import about_two_thumb from "/public/home1.jpg";
import { RiTeamFill } from 'react-icons/ri';
import { FaTableTennis } from 'react-icons/fa';

const About = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* TODO: Video Modal  */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="muczNvx9fgg"
        onClose={() => setOpen(false)}
      />

      <section
        className="section about--secondary wow fadeInUp"
        data-wow-duration="0.4s"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-xxl-5 d-none d-lg-block">
              <div className="about--secondary__thumb dir-rtl">
                <Image src={about_two_thumb} alt="Image" className="" />
                <div className="about--secondary__thumb-experience">
                  <p>
                    10 + Years <br /> of experience
                  </p>
                </div>
                <div className="about--secondary__modal">
                  <Image src={about_modal} alt="img" />
                  {/* <div className="play-wrapper">
                    <button
                      title="Youtube Video Player"
                      className="play-btn"
                      onClick={() => setOpen(true)}
                    >
                      <i className="fa-solid fa-play"></i>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-xxl-6 offset-xxl-1">
              <div className="section__content">
                <h5 className="section__content-sub-title">Our History</h5>
                <h2 className="section__content-title">
                  Tennis without borders.
                </h2>
                <p className="section__content-text">
                Tap into a wealth of knowledge and insights accumulated from over a decade of dedicated involvement in the world of tennis.
                </p>
                <div className="row">
                  <div className="col-sm-12 col-md-11 col-lg-12">
                    <div className="about--secondary__single">
                      <div className="row section__row">
                        <div className="col-6 col-sm-4 section__col">
                          <div className="about--secondary__single-item">
                            <div className="about--secondary__single-item__icon">
                              <i className=""><RiTeamFill /></i>
                            </div>
                            <h6>Professional Team</h6>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 section__col">
                          <div className="about--secondary__single-item">
                            <div className="about--secondary__single-item__icon">
                              <i className=""><FaTableTennis /></i>
                            </div>
                            <h6>Professional Trainings</h6>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 section__col">
                          <div className="about--secondary__single-item">
                            <div className="about--secondary__single-item__icon">
                              <i className="golftio-gym"></i>
                            </div>
                            <h6>Facilities with Gym</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section__content-cta">
                  <Link href="/" className="cmn-button">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
