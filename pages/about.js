import AboutUs from "@/components/about/AboutUs";
import Banner from "@/components/about/Banner";
import Club from "@/components/about/Club";
import Counter from "@/components/common/Counter";
import JoinClub from "@/components/common/JoinClub";
import Sponsor from "@/components/common/Sponsor";
import Team from "@/components/common/Team";
import Testimonial from "@/components/common/Testimonial";
import Head from "next/head";

export default function About() {
  return (
    <>
    <Head>
      <title>About | Altitude Tennis Academy</title>
    </Head>
      {/* Banner section */}
      <Banner />

      {/* AboutUs section */}
      <AboutUs />

      {/* Team section */}
      <Team />

      {/* Club section */}
      <Club />

      {/* Counter section */}
      {/* <Counter /> */}

      {/* Testimonial section */}
      <Testimonial />

      {/* JoinClub section */}
      {/* <JoinClub /> */}

      {/* Sponsor section */}
      <Sponsor />
    </>
  );
}
