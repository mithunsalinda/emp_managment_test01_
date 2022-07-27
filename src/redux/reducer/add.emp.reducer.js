import actionTypes from "../action/index"
import createReducer from "../../lib/createReducer";
const initialState = {
    empDate: [],
    empId: 0
}

// const addNewEmpReducer = createReducer(initialState, {
//     [actionTypes.ADD_NEW_EMP](state, actions) {
//         let object = {}
//         switch (actions.payload.type) {
//             case 'id':
//                 object = { id: actions.payload.id };
//                 break;
//             case 'firstName':
//                 object = { firstName: actions.payload.firstName };
//                 break;
//             case 'lastName':
//                 object = { lastName: actions.payload.lastName };
//                 break;
//             case 'email':
//                 object = { email: actions.payload.email };
//                 break;
//             case 'phoneNumber':
//                 object = { phoneNumber: actions.payload.phoneNumber };
//                 break;
//             case 'gender':
//                 object = { gender: actions.payload.gender };
//                 break;
//             default:
//                 break;
//         }
//         return {
//             ...state,
//             ...object
//         };
//     },
// });
// state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") },
// const addNewEmpReducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case actionTypes.ADD_NEW_EMP:
//             return {
//                 ...state,
//                 empDate: payload
//             }
//         default: return state
//     }
// }

export const addNewEmpReducer = (
    state = { empDate: JSON.parse(localStorage.getItem("addNewEmpReducer") || "[]") },
    action
) => {
    switch (action.type) {
        case actionTypes.ADD_NEW_EMP:
            return {
                ...state,
                empId: 0,
                empDate: action.payload.empDate
            };
        case actionTypes.DELETE_EMP:
            return { empDate: action.payload };
        case actionTypes.EDIT_EMP:
            return { empDate: action.payload.empDate }
        default:
            return state;
    }
};


export default addNewEmpReducer;