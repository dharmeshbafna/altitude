import NavBar from "@/components/coach/NavBar";
import Footer from "@/components/footer/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt from 'jsonwebtoken';
import { coach_login_details } from "../api/server";

export default function User() {

    const router = useRouter();
    const [name, setName] = useState('');

    useEffect(() => {
        const checktoken = localStorage.getItem('token');
        if (checktoken) {
            const decode = checktoken.replace(process.env.TOKEN, '');

            const details = jwt.decode(decode);

            const fetching = async () => {
                if (details.coach.coachId) {
                    const fetch_data = await coach_login_details(details.coach.coachId, checktoken);
                    setName(fetch_data.name);
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
                <div className="" style={{ margin: '246px 0px' }}>
                    {name}
                </div>
            </div>
            <Footer />
        </>
    )
}

User.getLayout = function getLayout(page) {
    return <>{page}</>;
};