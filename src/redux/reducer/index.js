import { combineReducers } from "redux";
import addNewEmpReducer from "./add.emp.reducer";

export default combineReducers({
    addNewEmpReducer: addNewEmpReducer
});