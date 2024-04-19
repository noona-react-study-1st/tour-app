import { create } from 'zustand';

const initialArea = {
  areaCode: 1,
  name: '서울',
  sigunguCode: '1',
  totalCount: 25,
};

export const useAreaStore = create((set) => ({
  area: initialArea,
  setAreaCode: (areaCode, name, totalCount) =>
    set(
      (state) => (state.area = { areaCode, name, sigunguCode: '1', totalCount })
    ),
  setSigunguCode: (sigunguCode) =>
    set((state) => (state.area = { ...state.area, sigunguCode })),
}));
