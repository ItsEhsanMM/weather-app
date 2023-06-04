import React, { createRef, useState } from "react";

// Api
import { api } from "../services/api";

// Components
import Card from "./Card";

const Main = () => {
   const [inputValue, setInputValue] = useState("");

   const [error, setError] = useState();
   const [gotData, setGotData] = useState();


   const valueHandler = (e) => {
      setInputValue(e.target.value);
   };

   const getData = async () => {
      const data = await api(inputValue);
      if (!data) {
         setError("An error occurred");
         setGotData(false);
      } else {
         setGotData(data);
         setError("");
      }
      setInputValue("");
      input.current.focus();
   };
   
   const input = createRef();

   return (
      <div className="w-full h-full bg-bg">
         <div className="w-full h-fit pt-20 pl-10">
            <h1 className="text-4xl text-text font-bold">Weather App</h1>
         </div>
         <div className="w-full mt-10 h-12 flex justify-between px-4 items-center">
            <input
               spellCheck={false}
               value={inputValue}
               onChange={valueHandler}
               type="text"
               ref={input}
               className="w-[calc(100%-8rem)] shadow-lg outline-none rounded-lg px-4 h-full"
               placeholder="Enter city"
            />
            <button className="bg-green w-28 shadow-sm p-[10px] rounded-lg text-text text-xl" onClick={getData}>
               search
            </button>
         </div>
         <div className="mt-8 ml-6 text-xl animate-scale-up-top text-red">{error && error}</div>
         <div className="animate-scale-up-top">{gotData && <Card data={gotData} />}</div>
      </div>
   );
};

export default Main;
