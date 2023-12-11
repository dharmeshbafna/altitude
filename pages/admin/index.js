import NavBar from "@/components/admin/NavBar";
import Footer from "@/components/footer/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt from 'jsonwebtoken';

export default function User() {

    const router = useRouter();
    const [name, setName] = useState('');

    return (
        <>
            <div className="container">
                <div className="" style={{ margin: '246px 0px' }}>
                    hello
                </div>
            </div>
        </>
    )
}

// User.getLayout = function getLayout(page) {
//     return <>{page}</>;
// };