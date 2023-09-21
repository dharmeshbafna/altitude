import NavBar from "@/components/admin/NavBar";
import Footer from "@/components/footer/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt from 'jsonwebtoken';
import { student_register } from "../api/server";

export default function Register() {

    const router = useRouter();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [id, setId] = useState();
    const [success, setSuccess] = useState(false);
    const [successmsg, setSuccessmsg] = useState('');
    const [err, setErr] = useState(false);
    const [errmsg, setErrmsg] = useState('');

    useEffect(() => {
        const ctoken = localStorage.getItem('token');

        if (!ctoken) {
            router.push('/sign-in');
        } else if (ctoken) {
            const decode = ctoken.replace(process.env.TOKEN, '');
            const check = jwt.decode(decode);

            if (!check.admin) {
                router.push('sign-in');
            }
        }
    }, []);

    const handleRegister = async (e) => {
        e.preventDefault();
        const res = await student_register(name, email, pass, id);

        setName('');
        setEmail('');
        setId('');
        setPass('');

        if (res.success) {
            setErr(false);
            setSuccess(true);
            setSuccessmsg(res.success);
        } else if (res.error) {
            setSuccess(false);
            setErr(true);
            setErrmsg(res.error);
        }
    };
    return (
        <>
            <NavBar cls="header--secondary" />
            <section
                className="section section--space-bottom authentication authentication--alt wow fadeInUp"
                data-wow-duration="0.4s"
                style={{ padding: '0px' }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xxl-6" style={{ marginBottom: '130px' }}>
                            <div className="authentication__wrapper">
                                <h4>Register Student</h4>

                                <h6 className="d-flex justify-content-center" style={{ color: 'red' }}>{err ? errmsg : ''}</h6>
                                <h6 className="d-flex justify-content-center" style={{ color: 'green' }}>{success ? successmsg : ''}</h6>
                                {/* form */}
                                <form onSubmit={handleRegister}>
                                    <div className="row">
                                        <div className="col-6 input-single">
                                            <label>Name</label>
                                            <input
                                                type="name"
                                                required
                                                placeholder="Full Name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-6 input-single">
                                            <label>Student ID</label>
                                            <input
                                                type="name"
                                                required
                                                placeholder="Student ID must be unique"
                                                value={id}
                                                onChange={(e) => setId(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-6 input-single">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="Email Address"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-6 input-single">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                required
                                                placeholder="Password"
                                                value={pass}
                                                onChange={(e) => setPass(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="section__cta text-start">
                                        <button type="submit" className="cmn-button">
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

Register.getLayout = function getLayout(page) {
    return <>{page}</>;
  };