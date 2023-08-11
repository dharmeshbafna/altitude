import Link from "next/link";

const BigBanner = () => {
  return (
    <section className="banner--secondary">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-7">
            <div
              className="banner__content wow fadeInUp"
              data-wow-duration="0.4s"
            >
              <h5 className="banner__content-sub-title">
                We Are Tennis Club
              </h5>
              <h1 className="banner__content-title">
                Look up, get up, but never give up!
              </h1>
              {/* <p className="primary-text banner__content-text">
                Racket sport with players hitting a ball over a net, aiming to score points by landing the ball within the opponent's court.
              </p> */}
              <div className="banner__content-cta">
                <Link href="/join-club" className="cmn-button">
                  Join Our Club
                </Link>
                {/* <Link
                  href="/about"
                  className="cmn-button cmn-button--secondary"
                >
                  About Us
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigBanner;
