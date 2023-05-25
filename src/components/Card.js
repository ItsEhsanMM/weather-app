import React from "react";

// function
import { ftoc } from "../helpers/function";

const Card = ({ data }) => {
   const {
      main: { temp },
      name,
      weather: {
         0: { description, icon },
      },
   } = data;
   
   return (
      <div className="w-screen  h-fit flex justify-center items-center">
         <div className="sm:flex-row shadow-lg relative flex bg-blue w-[min(80%,1280px)] h-64 p-6 rounded-3xl flex-col items-center justify-center ">
            <div className=" w-28 h-28 sm:w-40 sm:absolute left-4 sm:h-40">
               <img
                  className="w-full h-full drop-shadow-lg"
                  src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                  alt=""
               />
            </div>
            <div className="text-center w-fit text-silver text-2xl sm:absolute top-24 sm:text-4xl">
               <h2 className="font-bold text-text drop-shadow-md">{name}</h2>
               <h3 className="text-text drop-shadow-lg">{description}</h3>
            </div>

            <div className="text-text pt-4 font-bold text-lg sm:absolute right-12">
               <p className="sm:flex flex-col sm:text-3xl text-center">
                  {ftoc(temp).toFixed(2)} <span className="text-green text-xl sm:text-4xl">°C</span>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Card;
