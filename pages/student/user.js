import NavBar from "@/components/student/NavBar";
import Footer from "@/components/footer/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt from 'jsonwebtoken';
import { student_login_details, student_data_details } from "../api/server";
import StudentCard from "../../components/student/studentCard";

export default function User() {

    const router = useRouter();
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [mexpire, setMexpire] = useState('');
    const [mvalid, setMvalid] = useState('');
    const [mwon, setMwon] = useState('');
    const [mlost, setMlost] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        const checktoken = localStorage.getItem('token');
        if (checktoken) {
            const decode = checktoken.replace(process.env.TOKEN, '');

            const details = jwt.decode(decode);

            const fetching = async () => {
                if (details.user.studentId) {
                    const fetch_data = await student_login_details(details.user.studentId, checktoken);
                    const udata = await student_data_details(details.user.studentId, checktoken);
                    setName(fetch_data.name);
                    setId(fetch_data.studentId);
                    setEmail(fetch_data.email);
                    setPhone(fetch_data.phone);
                    const getdate = new Date(udata.success.membershipexpireDate);
                    const formattedDate = `${getdate.getDate()}, ${getdate.toLocaleString('default', { month: 'long' })} ${getdate.getFullYear()}`;
                    if (formattedDate == 'NaN, Invalid Date NaN' || udata.success.membershipexpireDate == null) {
                        setMexpire('-');
                    } else {
                        setMexpire(formattedDate);
                    }
                    if (udata.success.matcheswon == null) {
                        setMwon(0);
                    } else {
                        setMwon(udata.success.matcheswon);
                    }
                    if (udata.success.matcheslose == null) {
                        setMlost(0);
                    } else {
                        setMlost(udata.success.matcheslose);
                    }
                    if (udata.success.membershipValid == null) {
                        setMvalid('0 days');
                    } else {
                        setMvalid(udata.success.membershipValid);
                    }
                } else {
                    router.push('/sign-in');
                }
            };

            fetching();
        } else {
            router.push('/sign-in');
        }
    }, []);


    return (
        <>
            <NavBar cls="header--secondary" />
            <div className="container">
                <StudentCard
                    name={name}
                    id={id}
                    membershipexpire={mexpire}
                    membershipvalid={mvalid}
                    matchwon={mwon}
                    matchlose={mlost}
                    email={email}
                    phone={phone}
                />
            </div>
            <Footer />
        </>
    )
}

User.getLayout = function getLayout(page) {
    return <>{page}</>;
};