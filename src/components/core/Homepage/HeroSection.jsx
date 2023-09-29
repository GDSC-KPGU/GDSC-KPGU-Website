import React from "react";
import Homepageimage from "../../../assets/joy.png"

export default function HeroSection() {
  return (
    <div className="max-w-[85rem] mx-auto mt-5 px-4 sm:px-6 lg:px-8  ">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center m-20 ">
      <div className="flex flex-col gap-3 justify-center items-center">
      <h1  className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white"> 
      Developer Student Clubs 
      <span className="text-[#4285F4] font-normal  "> KPGU </span>

      </h1>
      <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">  Google Developer Student Clubs (GDSC) are university communities focused on Google developer technologies. Students who join GDSCs enhance their knowledge through collaborative learning and create solutions for local businesses and communities. </p>
      </div>
      

        <div className="m-auto ">
          <img src={Homepageimage} alt="Gdsc Homepage" />
        </div>
      </div>
    </div>
  );
}
