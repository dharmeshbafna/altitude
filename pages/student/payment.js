import NavBar from "@/components/student/NavBar";
import Footer from "@/components/footer/Footer";
import { useState, useEffect } from 'react';
import { payment_api, all_payments } from "../api/server";
import jwt from 'jsonwebtoken';
import { useRouter } from "next/router";

export default function Payment() {

    const router = useRouter();
    const [sid, setSid] = useState('');
    const [token, setToken] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dmsg, setDsmg] = useState('');
    const [did, setDid] = useState('');
    const [payments, setPayments] = useState([]);
    const [paymentid, setPaymentid] = useState('');
    const duration = '31 days';
    const plan = '10000 month';

    useEffect(() => {
        const checktoken = localStorage.getItem('token');
        const saltremove = checktoken.replace(process.env.TOKEN, '');
        const decode = jwt.decode(saltremove);

        if (decode.user.studentId) {
            setToken(checktoken);
            setSid(decode.user.studentId);
            setEmail(decode.user.email);
            setPhone(decode.user.phone);

            const getpayments = async () => {
                const gp = await all_payments(checktoken, decode.user.studentId);
                const gpa = gp.Payments;
                const sorted = gpa.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setPayments(sorted);
            };

            getpayments();
        } else {
            router.push('/sign-in');
        }
    }, []);

    const handlepayment = async (e) => {
        e.preventDefault();
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            const razorpay = new window.Razorpay({
                key: process.env.RAZORPAY_KEY,
                amount: 100000,
                currency: 'INR',
                name: 'Aisa Tennis Academy',
                description: 'Test Payment',
                image: '/aisa_icon.png',
                handler: async function (response) {
                    // setPaymentid(response.razorpay_payment_id);
                    const take = await payment_api(token, sid, response.razorpay_payment_id, plan);
                    setDsmg(take.success);
                    setDid(take.paymentid);
                },
                prefill: {
                    email: email,
                    contact: phone,
                },
                theme: {
                    color: '#0e7a31',
                },
            });

            razorpay.open();
        };

        return () => {
            document.body.removeChild(script);
        };
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = payments.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(payments.length / itemsPerPage);

    return (
        <>
            <NavBar cls='header--secondary' />
            <div className="container">
                <div style={{ margin: '150px 0px' }}>

                    <section
                        className="section section--space-bottom authentication authentication--alt wow fadeInUp"
                        data-wow-duration="0.4s"
                        style={{ padding: '0px' }}
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-xxl-6">
                                    <div className="authentication__wrapper" style={{ marginTop: '0px' }}>
                                        <h4>Payment section</h4>
                                        <div style={{ margin: '20px 0px' }}>{dmsg}</div>
                                        {/* form */}
                                        <form>
                                            <div className="input-single">
                                                <label>Enter Your Email ID</label>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="Your email ID here"
                                                />
                                            </div>
                                            <div className="section__cta text-start">
                                                <button onClick={handlepayment} className="cmn-button">
                                                    Make a Payment
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <h4 style={{ textAlign: 'center', margin: '20px 0px' }}>Payment History</h4>
                    <div className="row d-none d-lg-flex">
                        <div className="col-4 p-4" style={{ textAlign: 'center', fontWeight: 'bold' }}>Payment ID</div>
                        <div className="col-4 p-4" style={{ textAlign: 'center', fontWeight: 'bold' }}>Plan</div>
                        <div className="col-4 p-4" style={{ textAlign: 'center', fontWeight: 'bold' }}>Date</div>
                    </div>
                    <div>
                        {currentItems.map((a, index) => {

                            const updatedAtDate = new Date(a.createdAt);
                            const formattedDate = `${updatedAtDate.getDate()}, ${updatedAtDate.toLocaleString('default', { month: 'long' })} ${updatedAtDate.getFullYear()}, ${updatedAtDate.toLocaleString('default', { hour: 'numeric', minute: 'numeric', hour12: true })}`;

                            return (
                                <>
                                    <div className="d-none d-lg-flex row">
                                        <div className="col-4 my-4" style={{ textAlign: 'center' }}>{a.paymentId ? a.paymentId : 'Null'}</div>
                                        <div className="col-4 my-4" style={{ textAlign: 'center' }}>{a.plan}</div>
                                        <div className="col-4 my-4" style={{ textAlign: 'center', wordBreak: 'break-all' }}>{formattedDate}</div>
                                    </div>
                                    <div className="d-lg-none">
                                        <div style={{ padding: '20px' }}>
                                            <div className="row py-4">
                                                <div className="col-5" style={{ fontWeight: 'bold', wordBreak: 'break-word' }}>Payment ID : </div>
                                                <div className="col-7">{a.paymentId}</div>
                                            </div>
                                            <div className="row py-4">
                                                <div className="col-5" style={{ fontWeight: 'bold' }}>Plan : </div>
                                                <div className="col-7">{a.plan}</div>
                                            </div>
                                            <div className="row py-4">
                                                <div className="col-5" style={{ fontWeight: 'bold' }}>Date : </div>
                                                <div className="col-7" style={{ wordBreak: 'break-word' }}>
                                                    {formattedDate}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                        <div className="notify-pagination" style={{ margin: '20px 0px' }}>
                            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>{"<"}</button>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    className={currentPage === i + 1 ? 'colormsg' : ''}
                                    onClick={() => setCurrentPage(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={indexOfLastItem >= payments.length}>{">"}</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

Payment.getLayout = function getLayout(page) {
    return <>{page}</>;
};
