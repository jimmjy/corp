import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

type HeroPropsT = {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
};

const Hero: React.FC<HeroPropsT> = ({ imgData, imgAlt, title }) => {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image className="object-cover" src={imgData} alt={imgAlt} fill />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      </div>
      <div className="pt-48 flex justify-center item-center">
        <h1 className="text-white text-6xl">{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
