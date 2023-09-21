import Link from "next/link";
import { useState, useEffect } from "react";
import { login } from "../../pages/api/server";

const SignInBody = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handlesubmit = () => {
    console.log('Hello');
  };
  return (
    <section
      className="section section--space-bottom authentication authentication--alt wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-6">
            <div className="authentication__wrapper">
              <h4>Sign in to Tennis Academy</h4>
              <form>
                <div className="input-single">
                  <label>Enter Your Email ID</label>
                  <input
                    type="email"
                    required
                    placeholder="Your email ID here"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-single">
                  <label>Enter Password</label>
                  <input
                    type="password"
                    required
                    placeholder="Enter Your Password"
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>
                <p className="forget secondary-text">
                  <Link href="/contact-us">Forgot Password?</Link>
                </p>
                <div className="section__cta text-start">
                  <button onClick={handlesubmit} className="cmn-button">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInBody;
