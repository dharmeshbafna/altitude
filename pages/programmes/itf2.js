import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import SmallBanner from "@/components/common/SmallBanner"
import Link from "next/link"
import Head from "next/head"

export default function Itf2() {
    return (
        <>
        <Head>
            <title>ITF2 | Programmes</title>
        </Head>
            <SmallBanner title="ITF-2">
                <Breadcrumb
                    breadcrumbs={[
                        ["Home", "/"],
                        ["Our Programmes", "/programmes/itf2"],
                        ["ITF 2", "/programmes/itf2"],
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
                                    ITF-2
                                </h2>
                                <p className="section__content-text">
                                    German/European style coaching at a quarter of the European prices. With inputs from German trained coaches and fitness trainers. Based on a system that has produced Indian Davis Cuppers and the top ranked Indian in singles at the ATP. Ideal for Internationally ranked juniors and highly ranked national players in any age-category.
                                </p>
                                <p className="section__content-text">
                                    ITF 2 programmes are monitored by the coaches at the Tennis-University, Germany.
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
                                            Player on Court - 4 Max
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Tennis Sessions per week - 10 Max Priority coaching by German tennis and fitness team when they are in India It was proposed to offer personal fitness session too
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Private Lessons per Annum - 52 Max
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Fitness Sessions per Week - 15 Max
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Physiotherapy Sessions per week - 1 Max
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Recovery Sessions per week- 1 Max
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Video Analysis Sessions per Annum - 8 Max Video Conferencing per Annum - 3 Max for discuss existing game feedback, detail future planning and strategy with German team on a scheduled time within time frame
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Mental Fitness Training Sessions per annum - 8 Max
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Yoga Sessions per Week – 1
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Coach travelling with player per year - 8 Tournaments max( minimum 3 Players)
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Special discount at Alexander Waske Tennis University - Germany only on valid yearly contract in Ahmedabad
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Special discount at pro shop Clothing 8 shirts Bags
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Racquet String & Stringing - 50 Max a year
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
                                            Nutritionist Counseling sessions
                                        </li>
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
                                            Overseas Travel Policy
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Travel Helpdesk - domestic & International ticketing, hotel booking & visa
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