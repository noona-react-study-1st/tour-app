import { useEffect, useState } from "react";
import { useFetchAirDataQuery } from "../../hooks/useFetchAirData";

const AirItem = () => {
  const [airData, setAirData] = useState({});
  const [pm10, setPm10] = useState();
  const [pm25, setPm25] = useState();
  const [o3, setO3] = useState();

  const { data, isLoading, isError } = useFetchAirDataQuery("서울");
  useEffect(() => {
    if (!isLoading && !isError) {
      setAirData(data?.response.body.items[0]);
      setO3((airData?.o3Value * 100).toFixed(2));
      setPm10(airData?.pm10Value);
      setPm25(airData?.pm25Value);
    }
  }, [data, isLoading, isError]);

  console.log("airData", airData, pm10, pm25, o3);
  return (
    <div>
      <ul>
        <li>
          미세 :
          {pm10 < 31 ? (
            <span className="good"> 좋음</span>
          ) : pm10 < 81 ? (
            <span className="normal"> 보통</span>
          ) : pm10 < 151 ? (
            <span className="bad"> 나쁨</span>
          ) : (
            <span className="tooBad"> 나쁨</span>
          )}
        </li>
        <li>
          초미세
          {pm25 < 16 ? (
            <span className="good"> 좋음</span>
          ) : pm25 < 36 ? (
            <span className="normal"> 보통</span>
          ) : pm25 < 76 ? (
            <span className="bad"> 나쁨</span>
          ) : (
            <span className="tooBad"> 나쁨</span>
          )}
        </li>
        <li>
          오존
          {o3 < 3 ? (
            <span className="good"> 좋음</span>
          ) : o3 < 9 ? (
            <span className="normal"> 보통</span>
          ) : o3 < 15 ? (
            <span className="bad"> 나쁨</span>
          ) : (
            <span className="tooBad"> 나쁨</span>
          )}
        </li>
      </ul>
    </div>
  );
};

export default AirItem;
