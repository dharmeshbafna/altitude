import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt from 'jsonwebtoken';
import NavBar from "@/components/student/NavBar";
import Footer from "@/components/footer/Footer";
import { notification } from "../api/server";

export default function Notification() {
    const [dmsg, setDmsg] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const router = useRouter();

    useEffect(() => {
        const checktoken = localStorage.getItem('token');
        if (checktoken) {
            const decode = checktoken.replace(process.env.TOKEN, '');
            const details = jwt.decode(decode);

            const fetching = async () => {
                if (details.user.studentId) {
                    const msgs = await notification(checktoken);
                    const sortedMsgs = msgs.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
                    setDmsg(sortedMsgs);
                } else {
                    router.push('/sign-in');
                }
            };

            fetching();
        } else {
            router.push('/sign-in');
        }
    }, []);

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = dmsg.slice(indexOfFirstItem, indexOfLastItem);

        const totalPages = Math.ceil(dmsg.length / itemsPerPage);

        return (
            <>
                <NavBar cls="header--secondary" />
                <div className="container">
                    <div style={{ margin: '160px 0px' }}>
                        {currentItems.map((element, index) => {
                            const updatedAtDate = new Date(element.updatedAt);
                            const formattedDate = `${updatedAtDate.getDate()}, ${updatedAtDate.toLocaleString('default', { month: 'long' })} ${updatedAtDate.getFullYear()}, ${updatedAtDate.toLocaleString('default', { hour: 'numeric', minute: 'numeric', hour12: true })}`;

                            return (
                                <p key={index} className="notify-msg">
                                    {element.message} <br /><br /> <span style={{ fontSize: '15px' }}>{formattedDate}</span>
                                </p>
                            );
                        })}
                    <div className="notify-pagination">
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
                        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={indexOfLastItem >= dmsg.length}>{">"}</button>
                    </div>
                    </div>
            </div>
            <Footer />
        </>
    )
}

Notification.getLayout = function getLayout(page) {
    return <>{page}</>;
}
