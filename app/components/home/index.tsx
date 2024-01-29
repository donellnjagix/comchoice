"use client";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "@/public/images/pic1.jpg";
import image2 from "@/public/images/pic2.jpg";

type Props = {};

const Homes = (props: Props) => {
  return (
    <div id="home">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        interval={3000}
      >
        <div className="w-full h-[60vh] sm:h-[90vh] relative">
          <Image src={image1} alt="logo" fill className="object-cover" placeholder="blur" />
          <div className="absolute text-white top-[46%] md:left-[10%] p-[20px] bg-gray-400 rounded backdrop-filter backdrop-blur-md bg-opacity-10">
            <h1 className="font-bold text-2xl md:text-[30px] pt-3 px-8 text-alice-blue">
              Welcome to Travaux ltd
            </h1>
            <p className="text-base md:text-lg pb-1 font-bold">leading property developer in the Kenyan Real Estate Industry.</p>
          </div>
        </div>
        <div className="w-full h-[60vh] sm:h-[90vh] relative">
          <Image src={image2} alt="logo" fill className="object-cover" placeholder="blur" />
          <div className="absolute text-white top-[46%] md:left-[10%] p-[20px] bg-gray-400 rounded backdrop-filter backdrop-blur-md bg-opacity-10">
            <h1 className="font-bold text-2xl md:text-[30px] pt-3 px-8 text-alice-blue">
              Welcome to Travaux ltd
            </h1>
            <p className="text-base md:text-lg pb-1 font-bold">leading property developer in the Kenyan Real Estate Industry.</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Homes;