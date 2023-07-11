import Employee_Data from "./crud-operation/Employee_Data";
import Emp_Datail from "./crud-operation/Emp_Datail";
import Self_Work from "./Work/Self_Work";
import Simple_CrudTask from "./Task/Simple_CrudTask";
import Table_Form from "./Task/Table_Form";
import User_Detail from "./Work/User_Detail";
import Form_Validation from "./Work/Form_Validation";
import Student_Detail from "./Work/Student_Detail";
import Demo01 from "./Work/Demo01";
import Simple_Form from "./Work/Simple_Form";
import ChatGpt from "./Work/ChatGpt";
import Demo02 from "./Work/Demo02";
import NameChange from "./Work/NameChange";
import ButtonNameChange from "./Work/ButtonNameChange";
import Local_data from './LocalStorage/Data/Local_data'
import Local_User from "./LocalStorage/user/Local_User";
import User_Pagination from "./Pagination/User_Pagination";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Employee_Data" element={<Employee_Data />} />
          <Route path="/Emp_Datail" element={<Emp_Datail />} />
          <Route path="/Self_Work" element={<Self_Work />} />
          <Route path="/Simple_CrudTask" element={<Simple_CrudTask />} />
          <Route path="/Table_Form" element={<Table_Form />} />
          <Route path="/User_Detail" element={<User_Detail />} />
          <Route path="/Form_Validation" element={<Form_Validation />} />
          <Route path="/Student_Detail" element={<Student_Detail />} />
          <Route path="/Demo01" element={<Demo01 />} />
          <Route path="/Simple_Form" element={<Simple_Form />} />
          <Route path="/ChatGpt" element={<ChatGpt />} />
          <Route path="/Demo02" element={<Demo02 />} />
          <Route path="/NameChange" element={<NameChange />} />
          <Route path="/ButtonNameChange" element={<ButtonNameChange />} />
          <Route path="/Local_data" element={<Local_data />} />
          <Route path="/Local_User" element={<Local_User />} />
          <Route path="/User_Pagination" element={<User_Pagination />} />
          <Route path="/*" element={<h1>404 error </h1>} />
        </Routes>
        {/* <div class="position-relative">
        <a href="/" className="position-absolute top-50 start-0 translate-middle-y">Back to Home....</a>
        </div> */}
      </BrowserRouter>
    </>
  );
}

export default App;
