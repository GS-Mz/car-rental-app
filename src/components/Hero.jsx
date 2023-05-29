import { styles } from "../styles";
import { motion } from "framer-motion";
import { car_one_1, appstore, googleplay } from "../assets";
import React, { useState, useEffect } from "react";
import { Form } from "../components";


const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
    id="about"
    className=" relative w-full  bg-white-200  py-32  mx-auto overflow-hidden ">
      <div
        className={`${styles.paddingX}  inset-0 top-[180px] max-w-screen-2xl mx-auto flex flex-row  items-start gap-5`}
      >
        <div className="">
          <h1 className={`${styles.heroHeadText}`}>
            Find, book, and <br /> rental car in
            <span className="text-primary">
              {" "}
              Easy
              <br className="sm-max:hidden"/>
            </span>{" "}
            steps.
          </h1>
          <p className={`${styles.heroSubText} mt-8 `}>
            Get a car wherever and whenever you need it with your
            <br className="sm-max:hidden" /> iOS or Android device.
          </p>
          <div className="sm-max:w-44 sm-max:w-[45%] sm-max:mt-24 w-60  flex flex-row gap-4 mt-6">
          <img src={googleplay} alt="Google Play" />
          <img src={appstore} alt="App Store" />
          </div>
        </div>
      </div>

      <img src={car_one_1} alt="Jaguar F-type 2022" className="md:block hidden  absolute w-[48%]  right-[-5em] top-[10rem]" />

      {/* <div className={`${scrolled ? "hidden" : "block"} absolute sm-max:bottom-10 bottom-20 w-full flex justify-center items-center`}>
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-black-200 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-black-200 mb-1"
            />
          </div>
        </a>
      </div> */}

      
    </section>
  );
};

export default Hero;
