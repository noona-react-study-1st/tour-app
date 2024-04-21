import { useEffect, useState } from "react";
import "./MainAirStatus.style.css";
const AirItem = ({ data }) => {
  const [pm10, setPm10] = useState();
  const [pm25, setPm25] = useState();
  const [o3, setO3] = useState();

  console.log(data);
  useEffect(() => {
    setO3((data.o3Value * 100).toFixed(2));
    setPm10(data.pm10Value);
    setPm25(data.pm25Value);
  }, [data]);
  console.log(data, pm10, pm25, o3);
  return (
    <div className="airStatus">
      <ul>
        <li>
          <p>미세</p>
          {pm10 < 31 ? (
            <span className="good">좋음</span>
          ) : pm10 < 81 ? (
            <span className="normal">보통</span>
          ) : pm10 < 151 ? (
            <span className="bad">나쁨</span>
          ) : (
            <span className="tooBad">
              매우
              <br />
              나쁨
            </span>
          )}
        </li>
        <li>
          <p>초미세</p>
          {pm25 < 16 ? (
            <span className="good">좋음</span>
          ) : pm25 < 36 ? (
            <span className="normal">보통</span>
          ) : pm25 < 76 ? (
            <span className="bad">나쁨</span>
          ) : (
            <span className="tooBad">
              매우
              <br />
              나쁨
            </span>
          )}
        </li>
        <li>
          <p>오존</p>
          {o3 < 3 ? (
            <span className="good">좋음</span>
          ) : o3 < 9 ? (
            <span className="normal">보통</span>
          ) : o3 < 15 ? (
            <span className="bad">나쁨</span>
          ) : (
            <span className="tooBad">
              매우
              <br />
              나쁨
            </span>
          )}
        </li>
      </ul>
    </div>
  );
};

export default AirItem;
