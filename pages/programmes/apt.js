import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import SmallBanner from "@/components/common/SmallBanner"
import Link from "next/link"

export default function Apt() {
    return (
        <>
            <SmallBanner title="APT">
                <Breadcrumb
                    breadcrumbs={[
                        ["Home", "/"],
                        ["Our Programmes", "/programmes/apt"],
                        ["APT", "/programmes/apt"],
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
                                    APT
                                </h2>
                                <p className="section__content-text">
                                    German/European style coaching at a quarter of the European prices. With inputs from German trained coaches and fitness trainers. Based on a system that has produced Indian Davis Cuppers and the top ranked Indian in singles at the ATP. Ideal for Internationally ranked juniors and highly ranked national players in any age-category.
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
                                            10 minutes warm up
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            1 hr 45 mins of Tennis. Maximum 6 players/court with one German trained Leader Coach/Domestic Coach
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
                                            1 I.T.N. test/year
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Observing Coach for local Tournaments
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            45 minutes Fitness
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            1 life skills session with xyz sir every month
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Video Analysis in one year
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Mental toughness by xyz sir
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