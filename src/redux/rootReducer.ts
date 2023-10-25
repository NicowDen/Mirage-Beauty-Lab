// types.ts (ou un fichier similaire)
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import homeSliderReducer from './homeSliderReducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  homeSlider: homeSliderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

