import seoulImg from '../../assets/areaImage/seoul.jpeg';
import incheonImg from '../../assets/areaImage/incheon.jpeg';
import daejeonImg from '../../assets/areaImage/daejeon.jpeg';
import daeguImg from '../../assets/areaImage/daegu.jpeg';
import gyeonggiImg from '../../assets/areaImage/gyeonggi.jpeg';
import busanImg from '../../assets/areaImage/busan.jpeg';
import ulsanImg from '../../assets/areaImage/ulsan.jpeg';
import gwangjuImg from '../../assets/areaImage/gwangju.jpeg';
import gangwonImg from '../../assets/areaImage/gangwon.jpeg';
import chungbukImg from '../../assets/areaImage/chungbuk.jpeg';
import chungnamImg from '../../assets/areaImage/chungnam.jpeg';
import gyeongbukImg from '../../assets/areaImage/gyeongbuk.jpeg';
import gyeongnamImg from '../../assets/areaImage/gyeongnam.jpeg';
import jeonbukImg from '../../assets/areaImage/jeonbuk.jpeg';
import jeonnamImg from '../../assets/areaImage/jeonnam.jpeg';
import jejuImg from '../../assets/areaImage/jeju.jpeg';
import sejongImg from '../../assets/areaImage/sejong.jpeg';

export const cities = [
  {
    rnum: 1,
    areaCode: 1,
    areaImg: seoulImg,
    name: '서울',
    totalCount: 25,
  },
  {
    rnum: 2,
    areaCode: 2,
    areaImg: incheonImg,
    name: '인천',
    totalCount: 10,
  },
  {
    rnum: 3,
    areaCode: 3,
    areaImg: daejeonImg,
    name: '대전',
    totalCount: 5,
  },
  {
    rnum: 4,
    areaCode: 4,
    areaImg: daeguImg,
    name: '대구',
    totalCount: 9,
  },
  {
    rnum: 5,
    areaCode: 5,
    areaImg: gwangjuImg,
    name: '광주',
    totalCount: 5,
  },
  {
    rnum: 6,
    areaCode: 6,
    areaImg: busanImg,
    name: '부산',
    totalCount: 16,
  },
  {
    rnum: 7,
    areaCode: 7,
    areaImg: ulsanImg,
    name: '울산',
    totalCount: 5,
  },
  {
    rnum: 8,
    areaCode: 8,
    areaImg: sejongImg,
    name: '세종',
    totalCount: 1,
  },
  {
    rnum: 9,
    areaCode: 31,
    areaImg: gyeonggiImg,
    name: '경기',
    totalCount: 31,
  },
  {
    rnum: 10,
    areaCode: 32,
    areaImg: gangwonImg,
    name: '강원',
    totalCount: 18,
  },
  {
    rnum: 11,
    areaCode: 33,
    areaImg: chungbukImg,
    name: '충북',
    totalCount: 12,
  },
  {
    rnum: 12,
    areaCode: 34,
    areaImg: chungnamImg,
    name: '충남',
    totalCount: 15,
  },
  {
    rnum: 13,
    areaCode: 35,
    areaImg: gyeongbukImg,
    name: '경북',
    totalCount: 22,
  },
  {
    rnum: 14,
    areaCode: 36,
    areaImg: gyeongnamImg,
    name: '경남',
    totalCount: 20,
  },
  {
    rnum: 15,
    areaCode: 37,
    areaImg: jeonbukImg,
    name: '전북',
    totalCount: 14,
  },
  {
    rnum: 16,
    areaCode: 38,
    areaImg: jeonnamImg,
    name: '전남',
    totalCount: 22,
  },
  { rnum: 17, areaCode: 39, areaImg: jejuImg, name: '제주', totalCount: 4 },
];

export const contentTypeId = {
  tour: 12,
  culture: 14,
  events: 15,
  travelCourse: 25,
  leisureSports: 28,
  sleep: 32,
  shopping: 38,
  food: 39,
};
