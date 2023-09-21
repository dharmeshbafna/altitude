import Image from "next/image";
import Chart from "./Chart";

export default function StudentCard({
    id,
    name,
    membershipexpire,
    membershipvalid,
    matchwon,
    matchlose,
    email,
    phone,
}) {
    return (
        <>
            <section
                className="section section--space-bottom authentication authentication--alt wow fadeInUp"
                data-wow-duration="0.4s"
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="">
                            <div className="authentication__wrapper row">
                                <Image src='/images/ball-bg.png' width={100} height={100} className="col-md-6" />
                                <div className="col-md-6 margin-card-top">
                                    <div className="row">
                                        <p className="col-6" style={{ fontWeight: 'bold' }}>Student Id</p>
                                        <p className="col-1 d-flex justify-content-center" style={{ fontWeight: 'bold' }}>:</p>
                                        <p className="col-5">{id}</p>
                                    </div>
                                    <div className="row">
                                        <p className="col-6" style={{ fontWeight: 'bold' }}>Name</p>
                                        <p className="col-1 d-flex justify-content-center" style={{ fontWeight: 'bold' }}>:</p>
                                        <p className="col-5">{name}</p>
                                    </div>
                                    <div className="row">
                                        <p className="col-6" style={{ fontWeight: 'bold' }}>Email</p>
                                        <p className="col-1 d-flex justify-content-center" style={{ fontWeight: 'bold' }}>:</p>
                                        <p className="col-5">{email}</p>
                                    </div>
                                    <div className="row">
                                        <p className="col-6" style={{ fontWeight: 'bold' }}>Phone</p>
                                        <p className="col-1 d-flex justify-content-center" style={{ fontWeight: 'bold' }}>:</p>
                                        <p className="col-5">{phone}</p>
                                    </div>
                                    <div className="row">
                                        <p className="col-6" style={{ fontWeight: 'bold' }}>Membership Validity</p>
                                        <p className="col-1 d-flex justify-content-center" style={{ fontWeight: 'bold' }}>:</p>
                                        <p className="col-5">{membershipvalid}</p>
                                    </div>
                                    <div className="row">
                                        <p className="col-6" style={{ fontWeight: 'bold' }}>Membership Expire Date</p>
                                        <p className="col-1 d-flex justify-content-center" style={{ fontWeight: 'bold' }}>:</p>
                                        <p className="col-5">{membershipexpire}</p>
                                    </div>
                                    <div className="flex justify-content-center">
                                        <Chart matchesWon={matchwon} matchesLost={matchlose} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}