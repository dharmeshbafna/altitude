import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import SmallBanner from "@/components/common/SmallBanner"
import Link from "next/link"
import Head from "next/head"

export default function National() {
    return (
        <>
        <Head>
            <title>National | Programmes</title>
        </Head>
            <SmallBanner title="National">
                <Breadcrumb
                    breadcrumbs={[
                        ["Home", "/"],
                        ["Our Programmes", "/programmes/national"],
                        ["National", "/programmes/national"],
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
                                    National
                                </h2>
                                <p className="section__content-text">
                                    Supervised by our German trained coaches, players learn the efficient technique and sound fundamentals of the game, including great tactics and footwork patterns. Includes high intensity fitness sessions.
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
                                            Player specific tennis and fitness strategy and Periodization & Tournament planning supervised by German and German trained Indian coaches
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Player on Court - Mostly 4
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Tennis Sessions per week - 6 Max (2hrs) including 2 Private lessons in a month -(Two players per court)
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Fitness Sessions per week - 05 Max ( 30 Min warm up - 60 Min fitness)
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            One Physiotherapy & One Recovery Session per month
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Video Analysis Sessions per Annum - 4 Max
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Mental Fitness Training Sessions per annum - 4 Max
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            One Yoga session per week (Morning)
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Special discount at Alexander Waske Tennis University - Germany only on valid yearly contract in Ahmedabad
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Special discount at pro shop
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
                                            Game Analysis by German coach
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Long term tennis and fitness strategy & periodization strategy by German coach
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Personal coaching - German coach
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            German trained Indian coach
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Resident coach
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Tournament Planning by Tennis experts
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Tournament Travelling with coach
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Racquet Stringing
                                        </li>
                                        <li style={{ width: '100%', alignItems: 'flex-start' }}>
                                            <i className="golftio-pin-checked" style={{ marginTop: '5px' }}></i>
                                            Nutritionist Counseling sessions
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