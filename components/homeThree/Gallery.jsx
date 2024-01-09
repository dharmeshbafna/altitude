import Image from "next/image";
import Link from "next/link";
import one from '/public/g2.jpg';
import two from '/public/g3.jpg';
import three from '/public/g1.jpg';
import four from '/public/g4.jpg';
import five from '/public/g5.jpg';

const Gallery = () => {
  return (
    <section className="section gallery" style={{padding: '60px 0px',}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div
              className="section__header wow fadeInUp"
              data-wow-duration="0.4s"
            >
              <h5 className="section__header-sub-title">Gallery</h5>
              <h2 className="section__header-title">Our Latest Photos</h2>
              <p>
                Tennis Sports Club is a tennis club with a history that goes back
                to XX century. From a cricket club to soccer tournaments,
              </p>
              <div className="section__header-cta">
                <Link href="/gallery" className="cmn-button">
                  See all Image
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row section__row align-items-center">
          <div className="col-sm-6 col-lg-4 col-xl-4 section__col">
            <div className="gallery__thumb">
              <div className="gallery__thumb-single rounded-2" style={{ marginTop: '14px', marginBottom: '14px' }}>
                <Image src={one} width={200} height={200} alt="Image" />
              </div>
              <div className="gallery__thumb-single rounded-2" style={{ marginTop: '14px', marginBottom: '14px' }}>
                <Image src={two} width={200} height={200} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xl-4 section__col d-none d-lg-block">
            <div className="gallery__thumb">
              <div className="gallery__thumb-single rounded-2">
                <Image src={three} width={200} height={200} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 section__col">
            <div className="gallery__thumb">
              <div className="gallery__thumb-single rounded-2" style={{ marginTop: '14px', marginBottom: '14px' }}>
                <Image src={four} width={200} height={200} alt="Image" />
              </div>
              <div className="gallery__thumb-single rounded-2" style={{ marginTop: '14px', marginBottom: '14px' }}>
                <Image src={five} width={200} height={200} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
