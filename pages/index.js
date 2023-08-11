import BigBanner from "@/components/common/BigBanner";
import Shop from "@/components/common/Shop";
import Team from "@/components/common/Team";
import TestimonialOne from "@/components/common/TestimonialOne";
import Footer from "@/components/footer/Footer";
import About from "@/components/home/About";
import Abouttwo from "@/components/homeTwo/About";
import Event from "@/components/home/Event";
import Facility from "@/components/homeThree/Facility";
// import Facility from "@/components/home/Facility";
// import JoinClub from "@/components/home/JoinClub";
import JoinClub from "@/components/common/JoinClub";
import ClubView from "@/components/homeThree/ClubView";
import OurClub from "@/components/home/OurClub";
import PricingPlan from "@/components/home/PricingPlan";
import Training from "@/components/home/Training";
import NavBar from "@/components/navBar/NavBar";
import Preloader from "@/components/preloader/Preloader";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import Gallery from "@/components/homeThree/Gallery";
import Counter from "@/components/common/Counter";
import Test from '@/pages/test';

export default function Home() {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* NavBar Secrtion */}
      <NavBar cls="" />

      {/* Big Banner Secrtion */}
      {/* <BigBanner /> */}
      <Test />

      {/* Facility Secrtion */}
      <Facility />

      {/* About Secrtion */}
      <About />

      {/* Event Secrtion */}
      <Event />

      {/* Our Club Secrtion */}
      {/* <OurClub /> */}

      {/* Team Secrtion */}
      <Team />

      {/* Counter */}
      <Counter />

      {/* Club View Secrtion */}
      <ClubView />

      {/* Training Secrtion */}
      <Training />

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonial One Secrtion */}
      <TestimonialOne />

      {/* Pricing Plan Secrtion */}
      <PricingPlan />

      {/* Join Club Secrtion */}
      <JoinClub />

      {/* Footer Secrtion */}
      <Footer />

      {/* Scroll To Top */}
      <ScrollToTop />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <>{page}</>;
};
