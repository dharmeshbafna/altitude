import Banner from "@/components/contactUs/Banner";
import ContactBody from "@/components/contactUs/ContactBody";
import ContactForm from "@/components/contactUs/ContactForm";
import Head from "next/head";

export default function ContactUs() {
  return (
    <>
    <Head>
      <title>Contact | Altitude Tennis Academy</title>
    </Head>
      {/* Banner Section */}
      <Banner />

      {/* Contact Body Section */}
      <ContactBody />

      {/* Contact Form Section */}
      <ContactForm />
    </>
  );
}
