import ContactItemCart from "../card/ContactItemCart";

const contactInfo = [
  {
    id: 1,
    title: "Call Now",
    icon: "golftio-phone",
    contact_by: ["+91 XXXXXXXXXX"],
  },
  {
    id: 2,
    title: "Email Address",
    icon: "golftio-email",
    contact_by: ["info@tennisacademy.com"],
  },
  {
    id: 3,
    title: "Location",
    icon: "golftio-pin-location",
    contact_by: [
      "Ahmedabad, Gujarat 38XXXXX",
    ],
  },
];

const ContactBody = () => {
  return (
    <section className="section contact wow fadeInUp" data-wow-duration="0.4s">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section__header">
              <h2 className="section__header-title">Contact Us</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center section__row">
          {contactInfo.map((info) => (
            <div
              key={info.id}
              className="col-sm-6 col-lg-4 col-xl-4 section__col"
            >
              <ContactItemCart info={info} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactBody;
