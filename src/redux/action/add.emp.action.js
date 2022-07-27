import actionTypes from "./index"

const addNewEmp = (payload) => (dispatch, getState) => {
    const empDate = getState().addNewEmpReducer.empDate;
    //const empDate = getState()
    console.log('ss', empDate);
    empDate.push(payload);
    localStorage.setItem("addNewEmpReducer", JSON.stringify(empDate));
    dispatch({
        type: actionTypes.ADD_NEW_EMP,
        payload: empDate,
    });
    localStorage.setItem("addNewEmpReducer", JSON.stringify(empDate));

};
const editEmp = (payload) => (dispatch, getState) => {
    const empDate = getState().addNewEmpReducer.empDate;
    for (let i = 0; i < empDate.length; i++) {
        if (empDate[i].id == payload.id) {
            empDate.splice(i, 1, payload)
        }
    }
    console.log('employee', empDate);
    localStorage.setItem("addNewEmpReducer", JSON.stringify(empDate));
    dispatch({
        type: actionTypes.EDIT_EMP,
        payload: empDate,
    });
}
const deleteEmp = (payload) => (dispatch) => {
    localStorage.setItem("addNewEmpReducer", JSON.stringify(payload));
    dispatch({
        type: actionTypes.DELETE_EMP,
        payload: payload,
    });

}
export default {
    addNewEmp,
    editEmp,
    deleteEmp,
};