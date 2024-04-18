import {Map, MapMarker} from 'react-kakao-maps-sdk';
import useKakaoLoader from '../../hooks/useKakaoLoader';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';

const DetailMap = ({coordX, coordY, title}) => {
  console.log(coordX, coordY);
  useKakaoLoader();

  return (
    <div>
      <Map center={{lat: Number(coordY), lng: Number(coordX)}} style={{width: '100%', height: '360px'}}>
        <MapMarker position={{lat: Number(coordY), lng: Number(coordX)}}>
          <div>
            <Link to={`https://map.kakao.com/link/to/${title},${Number(coordY)},${Number(coordX)}`} target='_blank'>
              {title}
            </Link>
          </div>
        </MapMarker>
      </Map>
    </div>
  );
};
export default DetailMap;
