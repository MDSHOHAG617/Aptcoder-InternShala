import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import EmployeAnalytics from "./Components/Dashboard/EmployeAnalytics";
import EmployeList from "./Components/Dashboard/EmployeList";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Login/Login";
import Registration from "./Login/Registration";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<EmployeList></EmployeList>}></Route>
          <Route
            path="employeeAnalytics"
            element={<EmployeAnalytics></EmployeAnalytics>}
          ></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="*" element={<NotFound>Home</NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
