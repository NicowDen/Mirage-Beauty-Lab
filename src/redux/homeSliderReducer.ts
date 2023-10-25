import { createSlice } from '@reduxjs/toolkit';

interface RubricState {
  sliderHome: boolean;
  sliderHomeLabo: boolean;
  sliderHomeExp: boolean;
  sliderHomeForma: boolean;
}

const initialState : RubricState = {
  sliderHome: false,
  sliderHomeLabo: false,
  sliderHomeExp: false,
  sliderHomeForma: false,
};

const homeSliderSlice = createSlice({
  name: 'rubrics',
  initialState,
  reducers: {
    sliderHomeOn: (state) => {
      state.sliderHome = true;
      state.sliderHomeLabo = false;
      state.sliderHomeExp = false;
      state.sliderHomeForma = false;
    },
    sliderHomeLaboOn: (state) => {
      state.sliderHome = false;
      state.sliderHomeLabo = true;
      state.sliderHomeExp = false;
      state.sliderHomeForma = false;
    },
    sliderHomeExpOn: (state) => {
      state.sliderHome = false;
      state.sliderHomeLabo = false;
      state.sliderHomeExp = true;
      state.sliderHomeForma = false;
    },
    sliderHomeFormaOn: (state) => {
      state.sliderHome = false;
      state.sliderHomeLabo = false;
      state.sliderHomeExp = false;
      state.sliderHomeForma = true;
    },
  },
});

export const { sliderHomeOn, sliderHomeLaboOn, sliderHomeExpOn, sliderHomeFormaOn } = homeSliderSlice.actions;
export default homeSliderSlice.reducer;
