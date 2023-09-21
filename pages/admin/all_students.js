import NavBar from "@/components/admin/NavBar";
import Footer from "@/components/footer/Footer";
import { all_students } from "../api/server";
import { useState, useEffect } from "react";
import jwt from 'jsonwebtoken';
import { useRouter } from "next/router";

export default function Students() {

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
            const res = await all_students();
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
                <h4 className="text-center p-4">Students Data</h4>
                <div className="row my-4">
                    <div className="col-2 d-flex justify-content-center" style={{ fontWeight: 'bold' }}>
                        Student ID
                    </div>
                    <div className="col-3 d-flex justify-content-center" style={{ fontWeight: 'bold' }}>
                        Student Name
                    </div>
                    <div className="col-3 d-flex justify-content-center" style={{ fontWeight: 'bold' }}>
                        Membership Expire
                    </div>
                    <div className="col-3 d-flex justify-content-center" style={{ fontWeight: 'bold' }}>
                        Membership Valid
                    </div>
                </div>
                {currentItems.map((e, index) => {
                    const getdate = new Date(e.studentData.membershipexpireDate);
                    const formattedDate = `${getdate.getDate()}, ${getdate.toLocaleString('default', { month: 'long' })} ${getdate.getFullYear()}`;
                    return (
                        <>
                            <div key={index} className="row">
                                <p className="col-2 d-flex justify-content-center my-2">
                                    {e.studentId}
                                </p>
                                <p className="col-3 d-flex justify-content-center my-2">
                                    {e.name}
                                </p>
                                <p className="col-3 d-flex justify-content-center my-2">
                                    {e.studentData.membershipexpireDate == null || e.membershipValid == '0 days' ? '-' : formattedDate}
                                </p>
                                <p className="col-3 d-flex justify-content-center my-2">
                                    {e.studentData.membershipValid}
                                </p>
                                <p className="col-1 d-flex justify-content-center my-2">
                                    More...
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

Students.getLayout = function getLayout(page) {
    return <>{page}</>;
};