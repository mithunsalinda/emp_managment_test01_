import logo from './logo.svg';
import { store } from "./redux/store";
import { Provider } from "react-redux";
import './App.css';
import '../src/assets/scss/app.css';
import { Button } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import { AddNewEmployee } from './pages/add.employee';
import { EmployeeList } from './pages/emp.lists';
import { EditEmpDetails } from './pages/edit.employee';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route index exact path="/emp_managment_test01_/employee/list" element={<EmployeeList />} />
          <Route exact path="/emp_managment_test01_/employee/add" element={<AddNewEmployee />} />
          <Route exact path="/emp_managment_test01_/employee/edit" element={<EditEmpDetails />} />
          <Route path="*" element={<Navigate to="/emp_managment_test01_/employee/list" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
