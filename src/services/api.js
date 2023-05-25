import axios from "axios";

export const api = async (city) => {
   const data = await axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=033d321c68a4d869458e81dbbe1af72c`)
      .then((response) => response.data)
      .catch(() => false);
   return data;
};

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=033d321c68a4d869458e81dbbe1af72c

//https://openweathermap.org/img/wn/
