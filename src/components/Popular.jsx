import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cars } from "../constants";
import { CarCard, SearchCarModal } from "../components";
import { HiOutlineMagnifyingGlassCircle } from "react-icons/hi2";

import React, { useState } from "react";

const PopularCars = ({abrirModal}) => {

  const handleAbrirModal = () => {
    abrirModal();
  }

  return (
    <section className="flex flex-col  justify-center items-center sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
      <div className="flex flex-col items-center">
        <p className={`${styles.aboutSubText}`}>popular rental deals</p>
        <h3 className={`${styles.aboutHeadText} `}>
          Most popular cars rental deals
        </h3>
      </div>

      <div className="my-6 flex gap-6 flex justify-center flex-wrap">
        {cars.map((car, index) => (
          <div key={car.model + index}>
            <CarCard {...car} />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={handleAbrirModal}
        className="flex items-center bg-white rounded-full text-blue-400 border-primary border-2 w-fit px-6 py-2 font-medium mt-6"
      >
        Search your car
        <HiOutlineMagnifyingGlassCircle size={20} className="ml-2" />
      </button>
      
    </section>
  );
};

export default PopularCars;
