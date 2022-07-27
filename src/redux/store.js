import { configureStore } from "@reduxjs/toolkit";
import addNewEmpReducer from "./reducer/add.emp.reducer";

export const store = configureStore({
    reducer: {
        addNewEmpReducer: addNewEmpReducer,
    },
});
