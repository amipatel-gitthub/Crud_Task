import React from "react";
import "./Abc.css";

export default function Main() {
    return (
        <>
            <section>
                <div class="tbl-container">
                    <table class="neumorphic">
                        <tbody>
                            <tr>
                                <td><a className="dropdown-item fst-italic" href="/Emp_Datail">Employee detail</a></td>
                                <td> <a className="dropdown-item fst-italic" href="/Demo01">Demo01 </a> </td>
                                <td><a className="dropdown-item fst-italic" href="/Employee_Data">Employee data</a></td>
                                <td> <a className="dropdown-item fst-italic" href="/ChatGpt">ChatGpt </a> </td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="neumorphic mt-5">
                        <tbody>
                            <tr>
                                <td> <a className="dropdown-item fst-italic " href="/ButtonNameChange"> ButtonNameChange</a> </td>
                                <td> <a className="dropdown-item fst-italic" href="/NameChange">Name Change </a> </td>
                                <td> <a className="dropdown-item fst-italic" href="/Self_Work">Self Work </a> </td>
                                <td> <a className="dropdown-item fst-italic" href="/Simple_Form">Simple Form </a> </td>
                                <td> <a className="dropdown-item fst-italic" href="/Student_Detail">Student Detail </a> </td>
                                <td> <a className="dropdown-item fst-italic" href="/User_Detail">User Detail </a> </td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="neumorphic mt-5 ">
                        <tbody>
                            <tr>
                                <td> <a className="dropdown-item fst-italic" href="/Simple_CrudTask">Simple CrudTask</a> </td>
                                <td> <a className="dropdown-item fst-italic" href="/Demo02">Demo02 </a> </td>
                                <td> <a className="dropdown-item fst-italic " href="/Table_Form">Table Form</a> </td>
                                <td> <a className="dropdown-item fst-italic" href="/Form_Validation">Form Validation </a> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="air air1"></div>
                <div class="air air2"></div>

                <div class="air air3"></div>
                <div class="air air4"></div>
            </section>


        </>
    );
}
