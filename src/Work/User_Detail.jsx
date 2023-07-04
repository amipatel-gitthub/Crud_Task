import React, { useState } from "react";

export default function User_Detail() {

    const [formData, setFormData] = useState({})
    const [records, setRecords] = useState([])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("User Information in console...", formData)

        if (formData.id) {
            updateRecord(formData)
        }
        else {
            createRecord(formData)
        }

        setFormData({})
    }

    const createRecord = (data) => {
        const id = Date.now().toString();
        const newRecord = { id, ...data }
        setRecords([...records, newRecord])
    }

    const updateRecord = (data) => {
        const updateRecords = records.map((record) =>
            record.id == data.id ? { ...record, ...data } : record
        );

        setRecords( updateRecords )
    }

    const deleteRecord = (id) => {
        const updateRecords = records.filter((record) => record.id !== id)

        setRecords( updateRecords )

    }

    const handleEdit = (record) => {
        setFormData(record)
    }

    const handleDelete = (id) => {
        deleteRecord(id)
    }


    return (
        <>
            <div className="container">
                <div className="mx-auto mt-4 border p-3" style={{ width: "600px" }}>
                    <form onSubmit={handleSubmit}>
                        <h4 className="text-center">Simple Crud operation</h4>
                        <hr />
                        <div className="form-outline mb-2">
                            <div className="row">
                                <div className="col-3">
                                    <label className="fw-bolder">User Id : </label>
                                </div>
                                <div className="col-9">
                                    <input type="number" className="form-control" name="uid"
                                        value={formData.uid || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-outline mb-2">
                            <div className="row">
                                <div className="col-3">
                                    <label className="fw-bolder">User name : </label>
                                </div>
                                <div className="col-9">
                                    <input type="text " className="form-control" name="name"
                                        value={formData.name || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-outline mb-2">
                            <div className="row">
                                <div className="col-3">
                                    <label className="fw-bolder">Phone-no. : </label>
                                </div>
                                <div className="col-9">
                                    <input type="number" className="form-control" name="pno"
                                        value={formData.pno || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-outline mb-2">
                            <div className="row">
                                <div className="col-3">
                                    <label className="fw-bolder">Salary : </label>
                                </div>
                                <div className="col-9">
                                    <input type="number" className="form-control" name="salary"
                                        value={formData.salary || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-outline mb-2">
                            <div className="row">
                                <div className="col-3">
                                    <label className="fw-bolder">Working Days : </label>
                                </div>
                                <div className="col-9">
                                    <input type="number" className="form-control" name="days"
                                        value={formData.days || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="m-auto text-center">
                            <button type="submit" className="btn btn-primary btn-block mb-4 px-3">
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>

                <table className="table  table-hover table-bordered mt-5 text-center mb-3">
                    <thead>
                        <tr>
                            <th className="text-secondary">User Id</th>
                            <th className="text-secondary">User name </th>
                            <th className="text-secondary">Phone-no. </th>
                            <th className="text-secondary">Salary </th>
                            <th className="text-secondary">Working Days </th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record) => (
                            <tr key={record.id}>
                                <td>{record.uid}</td>
                                <td>{record.name}</td>
                                <td>{record.pno}</td>
                                <td>{record.salary}</td>
                                <td>{record.days}</td>
                                <td>
                                    <button type="button" onClick={() => handleEdit(record)}>Edit</button>
                                    <button type="button" onClick={() => handleDelete(record.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}


