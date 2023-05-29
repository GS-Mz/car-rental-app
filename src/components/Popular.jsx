import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cars } from "../constants";
import { CarCard, SearchCarModal } from "../components";
import { HiOutlineMagnifyingGlassCircle } from "react-icons/hi2";

import React, { useState } from "react";

const PopularCars = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex flex-col  justify-center items-center">
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
        onClick={() => setIsOpen(true)}
        className="flex items-center bg-white rounded-full text-blue-400 border-primary border-2 w-fit px-6 py-2 font-medium mt-6"
      >
        Search your car
        <HiOutlineMagnifyingGlassCircle size={20} className="ml-2" />
      </button>
      <SearchCarModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default SectionWrapper(PopularCars, "Popular Cars");
