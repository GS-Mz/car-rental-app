import React, { useRef, useState, forwardRef } from "react";
import { styles } from "../styles";

import { TbManualGearbox } from "react-icons/tb";
import { VscGear } from "react-icons/vsc";
import { TbRoute2 } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa";
import { ghostCar } from "../assets";

const CompleteCar = () => {
  return (
    <div className="mt-6 p-2 w-full  aspect-[1/0.5] bg-white border-2 border-[#f2f3f5] rounded-lg ">
      <div className="">
        <div className="flex justify-between mt-2 mx-4">
          <p className="font-semibold text-xl ">Maker Model - 0000</p>

          <div className="flex">
            <svg
              className="w-[25px] mr-2"
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffcd61"
                d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"
              />
            </svg>
            <p className="font-semibold text-lg ">?/10</p>
          </div>
        </div>
      </div>
      <div className="flex mt-4 justify-center">
        <div className=" bg-white-200 border-2 max-w-[42rem] max-h-[23rem] border-[#f2f3f5] overflow-hidden">
          <img className="w-[46rem] " src={ghostCar} alt={`loading image`} />
        </div>

        <div className="flex flex-col pl-4  justify-between px-2">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col ">
              <div className="flex my-2 text-grey">
                <span className="text-lg">
                  <VscGear color="grey" size={15} />
                </span>
                <div className="text-start h-[3rem]">
                  <p className="text-xs ml-2 ">Engine Name</p>
                  <p className="text-lg font-semibold ml-2 break-all ">...</p>
                </div>
              </div>
              <div className="flex my-2 text-grey">
                <span className="text-lg">
                  <TbManualGearbox color="grey" size={15} />
                </span>
                <div className="text-start h-[3rem]">
                  <p className="text-xs ml-2 ">Transmission Type</p>
                  <p className="text-lg font-semibold ml-2">...</p>
                </div>
              </div>
              <div className="flex my-2 text-grey">
                <span className="text-lg">
                  <FaCarSide color="grey" size={15} />
                </span>
                <div className="text-start h-[3rem]">
                  <p className="text-xs ml-2 ">Body Style</p>
                  <p className="text-lg font-semibold ml-2">...</p>
                </div>
              </div>
              <div className="flex my-2 text-grey">
                <span className="text-lg">
                  <TbRoute2 color="grey" size={15} />
                </span>
                <div className="text-start h-[3rem]">
                  <p className="text-xs ml-2 ">Driving Range</p>
                  <p className="text-lg font-semibold ml-2">...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between border-t-2 border-[#f2f3f5] py-4">
            <p className="font-semibold">
              $0.00 <span className="font-normal">/day</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchCarModal = ({ cerrarModal }) => {
  return (
    <>
      <div className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 bg-gray-900 bg-opacity-50">
          <div className=" w-[60rem] h-[50rem]  bg-white rounded-lg  p-6 relative bg-gray-100">
            <div className="modal-content h-full relative">
              <h2 className={`${styles.aboutHeadText} py-4 px-2`}>
                Find the Ideal Wheels for You
              </h2>

              <div className="w-full">
                <form action="" className="flex gap-3">
                  <div className="">
                    <select
                      name="maker"
                      className="border border-gray-300 rounded-md px-4 py-2 w-52"
                      defaultValue={"Maker"}
                    >
                      <option disabled value="Maker">
                        Maker
                      </option>
                    </select>
                  </div>
                  <div className="">
                    <select
                      name="model"
                      className="border border-gray-300 rounded-md px-4 py-2 pr-12 w-52 "
                      defaultValue={"Model"}
                    >
                      <option disabled value="Model">
                        Model
                      </option>
                    </select>
                  </div>
                  <div>
                    <select
                      name="year"
                      className="border border-gray-300 rounded-md px-4 py-2 w-30"
                      defaultValue={"Year"}
                    >
                      <option disabled value="Year">
                        Year
                      </option>
                    </select>
                  </div>
                </form>
              </div>

              <CompleteCar />



                

              <button
                type="button"
                onClick={cerrarModal}
                className="absolute top-4 right-4 px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
              >
                Cerrar
              </button>
            </div>
            <div className="absolute left-0 bottom-0 w-full h-12 bg-primary rounded-b-lg flex flex-row-reverse ">
              <button className="mr-6 text-[#fff]">
                  Rent Now 
                </button>
              </div>
          </div>
          
        </div>
        
      </div>
      
    </>
  );
};

export default SearchCarModal;
