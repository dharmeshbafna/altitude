import Image from "next/image";
import Link from "next/link";
import Social from "../social/Social";
import logo_light from "/public/images/aisa_footer_logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row section__row">
          <div className="col-md-6 col-lg-4 col-xl-4 section__col">
            <div className="footer__single">
              <Link href="/" className="footer__single-logo">
                <Image src={logo_light} alt="Logo" width={250} />
              </Link>
              <div className="footer__single-content">
                <p>
                Racket sport with players hitting a ball over a net, aiming to score points by landing the ball within the opponent's court.
                </p>
                {/* Socila */}
                <Social
                  items={[
                    ["fa-facebook-f", "/"],
                    ["fa-twitter", "/"],
                    ["fa-square-instagram", "/"],
                    ["fa-linkedin-in", "/"],
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4 section__col">
            <div className="footer__single">
              <h5>Quick Links</h5>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">About Us</Link>
                  </li>
                  <li>
                    <Link href="/">Facility</Link>
                  </li>
                  <li>
                    <Link href="/">Events</Link>
                  </li>
                  <li>
                    <Link href="/">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4 section__col">
            <div className="footer__single">
              <h5>Address</h5>
              <div className="footer__single-content">
                <div className="footer__single-content__group">
                  <p>+91 XXX-XXX-XXXX</p>
                </div>
                <div className="footer__single-content__group">
                  <p>info@aisatennisacademy.com</p>
                </div>
                <div className="footer__single-content__group">
                  <p>AISA-2 Ahmedabad International Sports Acadamy In Lane of S.K.Farm,B/H, Kensville Golf Academy, Bodakdev, Rajpath Rangoli Rd, Ahmedabad, Gujarat 380054</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6 col-lg-3 col-xl-3 section__col">
            <h5>Newsletter</h5>
            <div className="footer__single">
              <div className="footer__single-content">
                <p>Subscribe our newsletter to get our latest update & news </p>
                <form action="#" method="post" name="newsletterForm">
                  <div className="newsletter">
                    <input
                      type="email"
                      name="news-mail"
                      id="newsMail"
                      placeholder="Your email address"
                      required
                    />
                    <button type="submit">
                      <i className="golftio-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div> */}
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <div className="copyright">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <p>
                    Copyright &copy; <span id="copyYear"></span> 2023 Aisa Tennis Academy.
                    All Rights Reserved{" "}
                  </p>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <Link href="/">Support</Link>
                    </li>
                    <li>
                      <Link href="/">Terms of Use</Link>
                    </li>
                    <li>
                      <Link href="/">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
