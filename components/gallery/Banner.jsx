import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Gallery">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Gallery", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
