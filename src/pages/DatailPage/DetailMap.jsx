import { Map, MapMarker } from "react-kakao-maps-sdk";
import useKakaoLoader from "../../hooks/useKakaoLoader";
import { Link } from "react-router-dom";

const DetailMap = ({ coordX, coordY, title }) => {
  // console.log("map", coordX, coordY);
  useKakaoLoader();

  return (
    <div>
      <Map
        center={{ lat: Number(coordY), lng: Number(coordX) }}
        style={{ width: "100%", height: "360px" }}
      >
        <MapMarker position={{ lat: Number(coordY), lng: Number(coordX) }}>
          <div className="titleBox">
            <Link
              to={`https://map.kakao.com/link/to/${title},${Number(
                coordY
              )},${Number(coordX)}`}
              target="_blank"
              title="카카오길안내 바로가기"
            >
              {title} 🚗
            </Link>
          </div>
        </MapMarker>
      </Map>
    </div>
  );
};
export default DetailMap;
