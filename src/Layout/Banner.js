import React from "react";
import banner from "../components/quiz.jpg";

const Banner = () => {
  return (
    <div className=" p-16  sm:p-4 mt-0 w-full  text-center bg-zinc-800">
      <div className="w-full grid md:grid-cols-2 sm:grid-cols-1 mx-auto ">
        <div className=" w-4/5">
          <img className="w-full" src={banner} alt="Banner" />
        </div>
        <div className=" w-4/5 text-center mt-10  text-white">
          <h1 className=" pt-8 text-3xl  font-bold ">
            Are You Ready For Quiz...???
          </h1>
          <p className=" font-bold text-2xl mt-5">Lets Have Some Fun</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
