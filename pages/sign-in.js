import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import SignInBody from "@/components/signIn/SignInBody";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  adminlogin
} from "./api/server";
import { useRouter } from "next/router";
import jwt from 'jsonwebtoken';
import Preloader from "@/components/preloader/Preloader";
import Head from "next/head";

export default function SignIn() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState('student');
  const [errmsg, setErrmsg] = useState('');
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const checktoken = localStorage.getItem('Altitude');

    if (checktoken) {
      const saltremove = checktoken.replace(process.env.TOKEN, '');
      const decode = jwt.decode(saltremove);

      if (decode.arole == 'admin') {
        router.push('/admin');
      }
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmail("");
    setPass("");

    if (role === 'student') {
      setErr(true);
      setErrmsg('Student Role Currently Under Maintainance.');

      setTimeout(() => {
        setErr(false);
        setSuccess(false);
        setErrmsg('');
        setSuccess('');
      }, 2000);
    } else if (role === 'coach') {
      setErr(true);
      setErrmsg("Coach Role Currently Under Maintainance.");

      setTimeout(() => {
        setErr(false);
        setSuccess(false);
        setErrmsg('');
        setSuccess('');
      }, 2000);
    } else if (role === 'admin') {
      const admin = await adminlogin(email, pass);

      console.log(admin);
      if (admin.token) {

        const decode = jwt.decode(admin.token.replace(process.env.TOKEN, ''));

        if (decode.user && decode.arole == 'admin') {
          localStorage.setItem('Altitude', admin.token);
          setSuccess(true);
          router.push('/admin');
        } else {
          setErr(true);
          setErrmsg('Something Error Occurred.');
        }
      } else if (admin.error) {
        setErr(true);
        setErrmsg(admin.error);
      } else {
        setErr(true),
          setErrmsg('Internal Server Error.');
      }

      setTimeout(() => {
        setErr(false);
        setSuccess(false);
        setErrmsg('');
        setSuccess('');
      }, 2000);
    }
  };

  const handleRole = (rolevalue) => {
    setRole(rolevalue);
  };

  return (
    <>
      <Head>
        <title>SignIn | Altitude Tennis Academy</title>
      </Head>
      {/* NavBar Secrtion */}
      {isLoading ? <Preloader /> : ''}
      <NavBar cls="header--secondary" />

      <section
        className="section section--space-bottom authentication authentication--alt wow fadeInUp"
        data-wow-duration="0.4s"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xxl-6">
              <div className="authentication__wrapper">
                <h4>Sign in to Tennis Academy</h4>
                {/* button */}
                <section
                  className="section pricing pricing--secondary wow fadeInUp"
                  data-wow-duration="0.4s"
                  style={{ padding: '0px' }}
                >
                  <div className="justify-content-center">
                    <div className="section__header" style={{ margin: '0px' }}>
                      <div
                        className="toggle-plan"
                        id="pricing-tab"
                        role="tablist"
                      >
                        <div role="presentation">
                          <button
                            className="plan-toggle active"
                            id="plan-monthly-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#plan-monthly"
                            type="button"
                            role="tab"
                            aria-controls="plan-monthly"
                            aria-selected="true"
                            onClick={() => handleRole('student')}
                          >
                            Student
                          </button>
                        </div>
                        <div role="presentation">
                          <button
                            className="plan-toggle"
                            id="plan-yearly-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#plan-yearly"
                            type="button"
                            role="tab"
                            aria-controls="plan-yearly"
                            aria-selected="false"
                            onClick={() => handleRole('coach')}
                          >
                            Coach
                          </button>
                        </div>
                        <div role="presentation">
                          <button
                            className="plan-toggle"
                            id="plan-yearly-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#plan-yearly"
                            type="button"
                            role="tab"
                            aria-controls="plan-yearly"
                            aria-selected="false"
                            onClick={() => handleRole('admin')}
                          >
                            Admin
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <h6 className="d-flex justify-content-center" style={{ color: 'red' }}>{err ? errmsg : ''}</h6>
                <h6 className="d-flex justify-content-center" style={{ color: 'green' }}>{success ? 'Login Successfull.' : ''}</h6>
                {/* form */}
                <form>
                  <div className="input-single">
                    <label>Enter Your Email ID</label>
                    <input
                      type="email"
                      required
                      placeholder="Your email ID here"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-single">
                    <label>Enter Password</label>
                    <input
                      type="password"
                      required
                      placeholder="Enter Your Password"
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                    />
                  </div>
                  <p className="forget secondary-text">
                    <Link href="/contact-us">Forgot Password?</Link>
                  </p>
                  <div className="section__cta text-start">
                    <button onClick={handleSubmit} className="cmn-button">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Secrtion */}
      <Footer />
    </>
  );
}

SignIn.getLayout = function getLayout(page) {
  return <>{page}</>;
};
