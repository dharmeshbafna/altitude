import NavBar from "@/components/admin/NavBar";
import Footer from "@/components/footer/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt from 'jsonwebtoken';

export default function User() {

    const router = useRouter();
    const [name, setName] = useState('');

    useEffect(() => {
        const checktoken = localStorage.getItem('token');
        if (checktoken) {
            const decode = checktoken.replace(process.env.TOKEN, '');

            const details = jwt.decode(decode);

            const fetching = async () => {
                if (details.admin) {
                    setName(details.admin.name);
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