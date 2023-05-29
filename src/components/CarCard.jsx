import { HiUsers } from "react-icons/hi";
import { TbManualGearbox } from "react-icons/tb";
import { GiThermometerCold, GiCarDoor } from "react-icons/gi";
import { VscGear } from 'react-icons/vsc'
import { TbRoute2 } from 'react-icons/tb'
import { FaCarSide } from 'react-icons/fa'
import { useEffect, useState } from "react";
import { ghostCar } from "../assets";

const CarCard = (car) => {
    const [apiData, setApiData] = useState(null);
    const { make, model, year } = car; //Desestructuración del objeto car
   
    useEffect(() =>{

        const lastLink = `${make}/${model}/${year}`; 

        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'ca320e9789mshc070fdab15405d8p1431a9jsnf7f555b05f62',
              'X-RapidAPI-Host': 'infocarsapi.p.rapidapi.com'
            }
          };
          
          fetch(`https://infocarsapi.p.rapidapi.com/cars/${lastLink}`, options)
            .then(response => response.json())
            .then((response) => {
                console.log(response)
                setApiData(response.data)
            })
            .catch(err => console.error(err));
    }, [])

    if (!apiData) {
        return (
            <div className="p-2 w-64  aspect-[1/1.7] bg-white border-2 border-[#f2f3f5] rounded-lg overflow-hidden">
            <div className="bg-white-200 border-2 h-[10rem] border-[#f2f3f5] overflow-hidden">
              <img
                className="min-w-[15.5rem]"
                src={ghostCar}
                alt={`loading image`}
              />
            </div>
      
            <div className="flex flex-col h-[62%] justify-between px-2">
              <div className="">
                <div className="flex mt-2">
                  <svg
                    className="w-[20px] mr-2"
                    viewBox="0 0 576 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#ffcd61"
                      d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"
                    />
                  </svg>
                  <p className="font-semibold py-2">
                    ?/10
                  </p>
                </div>
                <p className="font-semibold text-base ">
                Maker Model - 0000
                </p>
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className="w-[50%] flex flex-col items-start justify-evenly">
                  <div className="flex my-2 text-grey">
                    <span className="text-xs">
                      <VscGear color="grey" size={15} />
                    </span>
                    <div className="text-start h-[3rem]">
                    <p className="text-[0.56rem] ml-2 ">Engine Name</p>
                    <p className="text-xs font-semibold ml-2 break-all ">...</p>
                    </div>
                  </div>
                  <div className="flex my-2 text-grey">
                    <span className="text-xs">
                      <TbManualGearbox color="grey" size={15} />
                    </span>
                    <div className="text-start h-[3rem]">
                    <p className="text-[0.56rem] ml-2 ">Transmission Type</p>
                    <p className="text-xs font-semibold ml-2">...</p>
                    </div>
                  </div>
                </div>
                <div className="w-[50%] flex flex-col items-end justify-evenly">
                  <div className="flex my-2 text-grey">
                    <span className="text-xs">
                      <FaCarSide color="grey" size={15} />
                    </span>
                    <div className="text-start h-[3rem]">
                    <p className="text-[0.56rem] ml-2 ">Body Style</p>
                    <p className="text-xs font-semibold ml-2">...</p>
                    </div>
                  </div>
                  <div className="flex my-2 text-grey">
                    <span className="text-xs">
                      <TbRoute2 color="grey" size={15} />
                    </span>
                    <div className="text-start h-[3rem]">
                    <p className="text-[0.56rem] ml-2 ">Driving Range</p>
                    <p className="text-xs font-semibold ml-2">...</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between border-t-2 border-[#f2f3f5] py-4">
                <p className="font-semibold">
                  $0.00 <span className="font-normal">/day</span>
                </p>
                <p>
                  Rent now <span>→</span>
                </p>
              </div>
            </div>
          </div>
        )
      }

  return (
    <div className="p-2 w-64  aspect-[1/1.7] bg-white border-2 border-[#f2f3f5] rounded-lg overflow-hidden">
      <div className="bg-white-200 border-2 h-[10rem] border-[#f2f3f5] overflow-hidden">
        <img
          className="min-w-[15.5rem]"
          src={apiData.featuredImageUrl}
          alt={`${model} image`}
        />
      </div>

      <div className="flex flex-col h-[62%] justify-between px-2">
        <div className="">
          <div className="flex mt-2">
            <svg
              className="w-[20px] mr-2"
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffcd61"
                d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"
              />
            </svg>
            <p className="font-semibold py-2">
              {apiData.score ? apiData.score.overallScore : "?"}{"/10 "}
            </p>
          </div>
          <p className="font-semibold text-base ">
          {make} {model} - {year}
          </p>
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="w-[50%] flex flex-col items-start justify-evenly">
            <div className="flex my-2 text-grey">
              <span className="text-xs">
                <VscGear color="grey" size={15} />
              </span>
              <div className="text-start h-[3rem]">
              <p className="text-[0.56rem] ml-2 ">{apiData.specifications ? apiData.specifications[0].name : "?"}</p>
              <p className="text-xs font-semibold ml-2 break-all ">{apiData.specifications ? apiData.specifications[0].value : "?"}</p>
              </div>
            </div>
            <div className="flex my-2 text-grey">
              <span className="text-xs">
                <TbManualGearbox color="grey" size={15} />
              </span>
              <div className="text-start h-[3rem]">
              <p className="text-[0.56rem] ml-2 ">{apiData.specifications ? apiData.specifications[34].name : "?"}</p>
              <p className="text-xs font-semibold ml-2">{apiData.specifications ? apiData.specifications[34].value : "?"}</p>
              </div>
            </div>
          </div>
          <div className="w-[50%] flex flex-col items-end justify-evenly">
            <div className="flex my-2 text-grey">
              <span className="text-xs">
                <FaCarSide color="grey" size={15} />
              </span>
              <div className="text-start h-[3rem]">
              <p className="text-[0.56rem] ml-2 ">{apiData.specifications ? apiData.specifications[3].name : "?"}</p>
              <p className="text-xs font-semibold ml-2">{apiData.specifications ? apiData.specifications[3].value : "?"}</p>
              </div>
            </div>
            <div className="flex my-2 text-grey">
              <span className="text-xs">
                <TbRoute2 color="grey" size={15} />
              </span>
              <div className="text-start h-[3rem]">
              <p className="text-[0.56rem] ml-2 ">{apiData.specifications ? apiData.specifications[26].name : "?"}</p>
              <p className="text-xs font-semibold ml-2">{apiData.specifications ? apiData.specifications[26].value : "?"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-t-2 border-[#f2f3f5] py-4">
          <p className="font-semibold">
            ${Number(apiData.priceRange.min_msrp / 365).toFixed(2)} <span className="font-normal">/day</span>
          </p>
          <p>
            Rent now <span>→</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
