import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import SignInBody from "@/components/signIn/SignInBody";
import Link from "next/link";
import { useState, useEffect } from "react";
import { student_login, coach_login, admin_login } from "./api/server";
import { useRouter } from "next/router";
import jwt from 'jsonwebtoken';
import Preloader from "@/components/preloader/Preloader";

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
    const checktoken = localStorage.getItem('token');

    if (checktoken) {
      const saltremove = checktoken.replace(process.env.TOKEN, '');
      const decode = jwt.decode(saltremove);

      if (decode.user) {
        router.push('/student/user');
      } else if (decode.coach) {
        router.push('/coach/user');
      } else if (decode.admin) {
        router.push('/admin/user');
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
      const student = await student_login(email, pass);

      if (student && student.success) {
        localStorage.setItem('token', student.token);

        const schecktoken = localStorage.getItem('token');

        if (schecktoken) {
          const ssaltremove = schecktoken.replace(process.env.TOKEN, '');
          const sdecode = jwt.decode(ssaltremove);

          if (sdecode.user && role === 'student') {
            setErr(false);
            setSuccess(true);
            router.push('/student/user');
          }
        }
      } else {
        setErr(true);
        setErrmsg('Invalid Credentials.');
      }
    } else if (role === 'coach') {
      const coach = await coach_login(email, pass);

      if (coach && coach.success) {
        localStorage.setItem('token', coach.token);

        const cchecktoken = localStorage.getItem('token');

        if (cchecktoken) {
          const csaltremove = cchecktoken.replace(process.env.TOKEN, '');
          const cdecode = jwt.decode(csaltremove);

          if (cdecode.coach && role === 'coach') {
            setErr(false);
            setSuccess(true);
            router.push('/coach/user');
          }
        }
      } else {
        setErr(true);
        setErrmsg('Invalid Credentials. Please Try Again.');
        console.log('Invalid Credentails');
      }
    } else if (role === 'admin') {
      const admin = await admin_login(email, pass);

      if (admin && admin.success) {
        localStorage.setItem('token', admin.token);

        const achecktoken = localStorage.getItem('token');

        if (achecktoken) {
          const adecode = jwt.decode(achecktoken.replace(process.env.TOKEN, ''));

          if (adecode.admin && role === 'admin') {
            setErr(false);
            setSuccess(true);
            router.push('/admin/user');
          }
        }

      } else {
        setErr(true);
        setErrmsg('Invalid Credentials. Please Try Again.');
        console.log("Invalid Credentials.");
      }
    } else {
      console.log("Invalid Role Selection.");
    }
  };

  const handleRole = (rolevalue) => {
    setRole(rolevalue);
  };

  return (
    <>
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
