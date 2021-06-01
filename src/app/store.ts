import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import mainDataReducer from "../features/data/dataSlice"

export const store = configureStore({
  reducer: {
    mainData: mainDataReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
