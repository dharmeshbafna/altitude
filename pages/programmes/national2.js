import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import SmallBanner from "@/components/common/SmallBanner"
import Link from "next/link"
import Head from "next/head"

export default function National2() {
    return (
        <>
            <Head>
                <title>National2 | Programmes</title>
            </Head>
            <SmallBanner title="National-2">
                <Breadcrumb
                    breadcrumbs={[
                        ["Home", "/"],
                        ["Our Programmes", "/programmes/national2"],
                        ["National 2", "/programmes/national2"],
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
                                    National-2
                                </h2>
                                <p className="section__content-text">
                                    Ideal batch for tennis players looking to dominate at the international level. Programme boasts of systematic high performance tennis training, scientific fitness sessions (with regular testing, screening on certain never seen before high-end equipments) . Also contains excellent guidance/sessions on nutrition, hydration and mental toughness – all at one location.
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
                                            15 minutes warm up.
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            2 hours Tennis. Maximum 4 players/court with one German Trained/Senior Coach.
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Yearly Goal Setting
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Tournament guidance and brief planning
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            2 I.T.N. Test/year.
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Observing Coach for local tournaments
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            1 hour fitness by German trained fitness coach
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            1 life skills session with XYZ Sir every month.
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Video Analysis 2 in one year
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Mental toughness by XYZ Sir
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