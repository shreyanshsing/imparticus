import { combineReducers } from "@reduxjs/toolkit";
import LandingPageReducer from "../../Pages/LandingPage/redux/Landing.slice";
import SelectReducer from "../../Components/Selects/redux/Selects.slice";
import MyCoursePageReducer  from "src/Pages/MyCoursePage/redux/MyCoursePage.slice";

const rootReducer = combineReducers({
    SelectReducer: SelectReducer,
    LandingPageReducer: LandingPageReducer,
    MyCourse: MyCoursePageReducer
})

export default rootReducer