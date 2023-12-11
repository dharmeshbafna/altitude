import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import SmallBanner from "@/components/common/SmallBanner"
import about_thumb from "/public/images/gallery/center.jpg";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Itf1() {
    return (
        <>
        <Head>
            <title>ITF1 | Programmes</title>
        </Head>
            <SmallBanner title="ITF-1">
                <Breadcrumb
                    breadcrumbs={[
                        ["Home", "/"],
                        ["Our Programmes", "/programmes/itf1"],
                        ["ITF 1", "/programmes/itf1"],
                    ]}
                />
            </SmallBanner>
            <section className="section about about--alt">
                <div className="container">
                    <div className="row section__row align-items-center">
                        <div className="col-lg-12 col-xl-12 section__col">
                            <div className="section__content">
                                {/* <h5 className="section__content-sub-title">About us</h5> */}
                                <h2 className="section__content-title" style={{ textAlign: 'center' }}>
                                    ITF-1
                                </h2>
                                <p className="section__content-text">
                                    Ideal batch for tennis players looking to dominate at the international level. Programme boasts of systematic high performance tennis training, scientific fitness sessions (with regular testing, screening on certain never seen before high-end equipments) . Also contains excellent guidance/sessions on nutrition, hydration and mental toughness – all at one location.
                                </p>
                                <p className="section__content-text">
                                    ITF 1 programmes are monitored by the coaches at the Tennis-University, Germany.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section club club--alt">
                <div className="container">
                    <div className="row section__row">
                        <div className="col-lg-12 section__col">
                            <div className="section__content">
                                {/* <h5 className="section__content-sub-title">Community</h5> */}
                                <h2 className="section__content-title" style={{ textAlign: 'center' }}>
                                    Services Offered
                                </h2>
                                <div className="section__content-inner">
                                    <ul>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Player specific tennis and fitness strategy and periodization & Tournament planning supervised by German team
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Player on Court – 2 Mostly
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Tennis Sessions per week – 10 Max Priority coaching by German tennis and fitness team when they are in India It was proposed to offer personal fitness session too
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Private Lessons per Annum – 100 Max
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Fitness Sessions per week – 15 max
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Physiotherapy Sessions per week – 2 Max
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Recovery Sessions per week- 2 Max
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Video Analysis Sessions per Annum - 12 Max Video Conferencing per Annum – 4 Max for discuss existing game feedback, detail future planning and strategy with German team on a scheduled time within time frame
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Mental Fitness Training Sessions per annum – 12 Max
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Nutritionist Counseling sessions per annum – 4 Max ( Once in a quarter)
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Yoga Sessions per Week – 1
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Coach travelling with player per year – 12 Tournaments max( minimum 2 Players)
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Special discount at Alexander Waske Tennis University – Germany only on valid yearly contract in Ahmedabad
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Special discount at pro shop Clothing 8 shirts Bags
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section about about--alt">
                <div className="container">
                    <div className="row section__row align-items-center">
                        <div className="col-lg-12 col-xl-12 section__col">
                            <div className="section__content">
                                {/* <h5 className="section__content-sub-title">About us</h5> */}
                                <h2 className="section__content-title" style={{ textAlign: 'center' }}>
                                    On Request
                                </h2>
                                <div className="section__content-inner">
                                    <ul>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Housing facility for outside player
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Group Mediclaim policy
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Travel Helpdesk – domestic & International ticketing, hotel booking & visa
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Education placement/student exchange program
                                        </li>
                                    </ul>
                                </div>
                                <div className="section__content-cta">
                                    <Link href="/join-club" className="cmn-button" style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                                        7 Days Free Trial
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}