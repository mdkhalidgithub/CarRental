import React from "react";
import carPng from "../../assets/car/jeep.png";

function About() {
  return (
    <div
      className="dark:bg-black bg-slate-100 dark:text-white duration-300
    sm:min-h-[600px] sm:grid sm:place-items-center"
    >
      <div
        className="grid grid-cols-1
        sm:grid-cols-2 place-items-center"
      >
        <div
        data-aos="slide-right"
        data-aos-duration="1500"
        data-aos-once="false"
        >
          <img src={carPng} alt="" 
          className="sm:scale-105 sm:-translate-x-11 max-h-[300px]
          drop-shadow-[]"/>
        </div>
        <div>
          <div className="space-y-5 sm:p-16
          pb-6">
            <h1 data-aos='fade-up'
              className="text-3xl sm:text-4xl
                    font-bold font-serif"
            >
              About Us
            </h1>
            <p 
             data-aos='fade-up'
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nostrum, sapiente reprehenderit. Eveniet dolores debitis 
                inventore cumque, nisi cum ullam ipsum? Dignissimos,
                 quidem enim repellendus quaerat dicta cupiditate numquam. 
                 Odio, illo.
                 </p>
            <p
             data-aos='fade-up'
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nostrum, sapiente reprehenderit. Eveniet dolores debitis 
                inventore cumque, nisi cum ullam ipsum? Dignissimos,
                 quidem enim repellendus quaerat dicta cupiditate numquam. 
                 Odio, illo.
                 </p>

                 <button
                  data-aos='slide-up'
                  className="button-outline">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
