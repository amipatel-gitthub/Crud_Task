import React from 'react'
import l1 from './assets/logo.png'
import l2 from './assets/logo_bg.png'
import "./Abc.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav-margin">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={l1} alt='no space ' style={{ height: '45px', width: '100px' }} />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarCenteredExample"
                        aria-controls="navbarCenteredExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-end me-5"
                        id="navbarCenteredExample"
                    >
                        <ul className="navbar-nav  mb-2 mb-lg-0 ">
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Crud-Operation
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item fst-italic" href="/Emp_Datail">Employee detail</a></li>
                                    <li><a className="dropdown-item fst-italic" href="/Employee_Data">Employee data</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Crud-Task
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item fst-italic" href="/Simple_CrudTask">Simple CrudTask</a></li>
                                    <li><a className="dropdown-item fst-italic " href="/Table_Form">Table Form</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Crud-Work
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item fst-italic" href="/ButtonNameChange"> ButtonNameChange</a></li>
                                    <li><a className="dropdown-item fst-italic" href="/ChatGpt">ChatGpt </a></li>
                                    <li><a className="dropdown-item fst-italic" href="/Demo01">Demo01 </a></li>
                                    <li><a className="dropdown-item fst-italic" href="/Demo02">Demo02 </a></li>
                                    <li><a className="dropdown-item fst-italic" href="/Form_Validation">Form Validation </a></li>
                                    <li><a className="dropdown-item fst-italic" href="/NameChange">Name Change </a></li>
                                    <li><a className="dropdown-item fst-italic" href="/Self_Work">Self Work </a></li>
                                    <li><a className="dropdown-item fst-italic" href="/Simple_Form">Simple Form </a></li>
                                    <li><a className="dropdown-item fst-italic" href="/Student_Detail">Student Detail </a></li>
                                    <li><a className="dropdown-item fst-italic" href="/User_Detail">User Detail </a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Local Storage Data
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item fst-italic" href="/Local_data">Local Data</a></li>
                                    <li><a className="dropdown-item fst-italic" href="/Local_User">Local User</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pagination
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item fst-italic" href="/User_Pagination">User Pagination</a></li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
