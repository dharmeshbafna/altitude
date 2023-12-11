import Banner from "@/components/gallery/Banner";
import GalleryImags from "@/components/gallery/GalleryImags";
import GalleryPopup from "@/components/gallery/GalleryPopup";
import GallerySlider from "@/components/gallery/GallerySlider";
import Head from "next/head";

export default function Gallery() {
  return (
    <>
    <Head>
      <title>Gallery | Altitude Tennis Academy</title>
    </Head>
      {/* Banner Secrtion */}
      <Banner />

      {/* Gallery Imags Secrtion */}
      <GalleryImags />

      {/* Gallery Slider Secrtion */}
      {/* <GallerySlider /> */}

      {/* Gallery Popup Secrtion */}
      {/* <GalleryPopup /> */}
    </>
  );
}
