import React from "react";
import "./hero.css";
import img from "../../assets/heroimg1.png";

// import required modules

const Hero = () => {
  return (
    <div className="container-fluid h-[666px]">
      <div className="bg-repeat h-[666px] object-cover mx-10 rounded-xl relative grid grid-cols-2 gap-4">
        <div className="text-white flex items-center justify-center flex-col p-5 mx-5 text-center w-full h-full">
          <h1 className="font-bold text-6xl mb-5">Welcome to our Mart</h1>
          <h2 className="text-4xl font-bold text-yellow-400">
            {" "}
            consectetur adipisicing elit. Magni, omnis?
          </h2>
          <p className="text-2xl mt-5">
            We provide the best shopping experience Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Deserunt nihil quod fuga voluptatum
            distinctio omnis blanditiis quaerat vero nulla! Ex quam esse modi
            neque maiores non illum voluptates nemo, officia fugiat assumenda
            suscipit? Facere ratione maiores cupiditate quam similique nemo
            quia, molestias aspernatur est aliquid excepturi nihil atque quod
            maxime!
          </p>
        </div>
        <div className="container ">
          <div className="bg-mg flex items-end justify-end w-[712px] h-[666px]">
            <img className=" relative" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
