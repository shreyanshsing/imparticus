import { combineReducers } from "@reduxjs/toolkit";
import LandingPageReducer from "../../Pages/LandingPage/redux/Landing.slice";
import SelectReducer from "../../Components/Selects/redux/Selects.slice";

const rootReducer = combineReducers({
    SelectReducer: SelectReducer,
    LandingPageReducer: LandingPageReducer
})

export default rootReducer