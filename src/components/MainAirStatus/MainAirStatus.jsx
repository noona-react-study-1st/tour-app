import { useEffect, useState } from "react";
import { useFetchAirDataQuery } from "../../hooks/useFetchAirData";
import AirItem from "./AirItem";

const MainAirStatus = ({ cityName }) => {
  const [city, setCity] = useState();

  useEffect(() => {
    if (cityName && cityName !== city) {
      setCity(cityName);
    }
  }, [cityName, city]);

  const [airData, setAirData] = useState();
  const { data, isLoading, isError } = useFetchAirDataQuery(city);

  useEffect(() => {
    if (!isLoading && !isError) {
      setAirData(data?.response?.body?.items[0]);
    }
  }, [data, isLoading, isError]);

  // console.log(data, airData, isLoading, isError);

  if (isLoading) {
    return <p>...</p>;
  }

  return airData && <AirItem data={airData} />;
};

export default MainAirStatus;
