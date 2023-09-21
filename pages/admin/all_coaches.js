import NavBar from "@/components/admin/NavBar";
import Footer from "@/components/footer/Footer";
import { all_coaches } from "../api/server";
import { useState, useEffect } from "react";
import jwt from 'jsonwebtoken';
import { useRouter } from "next/router";

export default function Coaches() {

    const router = useRouter();
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const ctoken = localStorage.getItem('token');
        
        if (!ctoken) {
            router.push('/sign-in');
        } else if (ctoken) {
            const decode = ctoken.replace(process.env.TOKEN, '');
            
            const check = jwt.decode(decode);
            if (!check.admin) {
                router.push('/sign-in');
            }
        }
        
        const getdata = async () => {
            const res = await all_coaches(ctoken);
            setData(res);
        };
        
        getdata();
    }, []);
    
    const [currentpage, setCurrentpage] = useState(1);
    const itemsPerPage = 4;
    const indexOfLastItem = currentpage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    return (
        <>
            <NavBar cls="header--secondary" />
            <div className="container section about about--alt">
                <h4 className="text-center p-4">Coach Data</h4>
                <div className="row my-4">
                    <div className="col-4 d-flex justify-content-center" style={{ fontWeight: 'bold' }}>
                        Coach ID
                    </div>
                    <div className="col-4 d-flex justify-content-center" style={{ fontWeight: 'bold' }}>
                        Coach Name
                    </div>
                    <div className="col-4 d-flex justify-content-center" style={{ fontWeight: 'bold' }}>
                        Email
                    </div>
                </div>
                {currentItems.map((e, index) => {
                    return (
                        <>
                            <div key={index} className="row">
                                <p className="col-4 d-flex justify-content-center my-2">
                                    {e.coachId}
                                </p>
                                <p className="col-4 d-flex justify-content-center my-2">
                                    {e.name}
                                </p>
                                <p className="col-4 d-flex justify-content-center my-2">
                                    {e.email}
                                </p>
                            </div>
                        </>
                    )
                })}
                <div className="notify-pagination" style={{ margin: '20px 0px' }}>
                    <button onClick={() => setCurrentpage(currentpage - 1)} disabled={currentpage === 1}>{"<"}</button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={currentpage === i + 1 ? 'colormsg' : ''}
                            onClick={() => setCurrentpage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button onClick={() => setCurrentpage(currentpage + 1)} disabled={indexOfLastItem >= data.length}>{">"}</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

Coaches.getLayout = function getLayout(page) {
    return <>{page}</>;
};