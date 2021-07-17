import { RootState } from '../../app/store';


export const selectSocials = (state: RootState) => state.mainData.myData.social

export const selectProjects = (state: RootState) => state.mainData.myData.project

export const selectWorkExprience = (state: RootState) => state.mainData.myData.WorkExprience

export const selectStacks = (state: RootState) => state.mainData.myData.Stacks

export const selectServices = (state: RootState) => state.mainData.myData.Services

export const selectEducation = (state: RootState) => state.mainData.myData.Education

export const selectAbout = (state: RootState) => state.mainData.myData.About