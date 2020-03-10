import axios from "axios";
export const getResultByCityAction = CityName => {
  return async dispatch => {
    let Response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=ece6cb7755a4db8446e70186e4042449000`,
      {
        params: {
          q: CityName,
          appid: "ece6cb7755a4db8446e70186e4042449000"
        }
      }
    );
    console.log(Response);

    dispatch({ type: "Data_Weather", payload: Response.data });
  };
};
