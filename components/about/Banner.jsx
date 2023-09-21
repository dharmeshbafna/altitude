import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="About Us">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["About Us", "/about"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
