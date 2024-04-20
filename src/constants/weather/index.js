import data from '../../data/forecast_info.json';

export function getXYCoordsBySigunguName(sigunguName) {
  const foundIndex = data.findIndex((item) => item['2단계'] === sigunguName);
  const nX = data[foundIndex]['격자 X'];
  const nY = data[foundIndex]['격자 Y'];

  return { nX, nY };
}

export function getXYCoordsByCityName(cityName) {
  const foundIndex = data.findIndex((item) => item['1단계'].includes(cityName));
  const nX = data[foundIndex]['격자 X'];
  const nY = data[foundIndex]['격자 Y'];

  return { nX, nY };
}

export function getBaseTimeAndDate() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  let baseDate = year * 10000 + month * 100 + date;
  const HHMM = hours * 100 + minutes;

  let baseTime = '';

  if (HHMM >= 210 && HHMM < 510) {
    baseTime = '0200';
  } else if (HHMM >= 510 && HHMM < 810) {
    baseTime = '0500';
  } else if (HHMM >= 810 && HHMM < 1110) {
    baseTime = '0800';
  } else if (HHMM >= 1110 && HHMM < 1410) {
    baseTime = '1100';
  } else if (HHMM >= 1410 && HHMM < 1710) {
    baseTime = '1400';
  } else if (HHMM >= 1710 && HHMM < 2010) {
    baseTime = '1700';
  } else if (HHMM >= 2010 && HHMM < 2310) {
    baseTime = '2000';
  } else {
    baseTime = '2300';

    if (date > 1) {
      baseDate = baseDate - 1;
    } else {
      const yesterdayDate = new Date(currentDate - 24 * 60 * 60 * 1000);
      const yesterdayYear = yesterdayDate.getFullYear();
      const yesterdayMonth = yesterdayDate.getMonth() + 1;
      const yesterdayDay = yesterdayDate.getDate();

      baseDate = yesterdayYear * 10000 + yesterdayMonth * 100 + yesterdayDay;
    }
  }

  return { baseTime, baseDate };
}

export const skyType = {
  1: '맑음',
  2: '구름 조금',
  3: '구름 많음',
  4: '흐림',
};

export const rainType = {
  0: '없음',
  1: '비',
  2: '비/눈',
  3: '눈/비',
  4: '눈',
};