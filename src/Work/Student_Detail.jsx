import React, { useState } from 'react'

export default function Student_Detail() {

    const [formData, setFormData] = useState({})
    const [records, setRecords] = useState([])

    const HandleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("Student data into console", formData)

        if (formData.id) {
            updateRecord(formData)
        }
        else {
            createRecord(formData)
        }
        setFormData({});
    }

    const createRecord = (data) => {
        const id = Date.now().toString();
        const newRecord = { ...data, id }
        setRecords([...records, newRecord])
    }

    const updateRecord = (data) => {
        const updatedRecord = records.map((record) =>
            record.id == data.id ? { ...record, ...data } : record
        )
        setRecords(updatedRecord)
    }

    const deleteRecord = (id) => {
        const updatedRecord = records.filter((record) => record.id !== id)

        setRecords(updatedRecord)
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
                <div className="mx-auto mt-4 form-design p-3" style={{ width: "600px" }}>
                    <form onSubmit={handleSubmit}>
                        <h4 className="text-center">Student Detail</h4>
                        <hr />
                        <div className="form-outline mb-2">
                            <div className="row">
                                <div className="col-3">
                                    <label className="fw-bolder">Roll no : </label>
                                </div>
                                <div className="col-9">
                                    <input type="number" className="form-control" name="no"
                                        value={formData.no || ""}
                                        onChange={HandleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-outline mb-2">
                            <div className="row">
                                <div className="col-3">
                                    <label className="fw-bolder">Student name : </label>
                                </div>
                                <div className="col-9">
                                    <input type="text " className="form-control" name="name"
                                        value={formData.name || ""}
                                        onChange={HandleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-outline mb-2">
                            <div className="row">
                                <div className="col-3">
                                    <label className="fw-bolder">Standard </label>
                                </div>
                                <div className="col-9">
                                    <input type="number" className="form-control" name="std"
                                        value={formData.std || ""}
                                        onChange={HandleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-outline mb-2">
                            <div className="row">
                                <div className="col-3">
                                    <label className="fw-bolder">Grade : </label>
                                </div>
                                <div className="col-9">
                                    <input type="text" className="form-control" name="grade"
                                        value={formData.grade || ""}
                                        onChange={HandleChange}
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
                            <th className="text-secondary">Roll No.</th>
                            <th className="text-secondary">Student name </th>
                            <th className="text-secondary">Standard </th>
                            <th className="text-secondary">Grade </th>
                            <th className="text-secondary">Crud Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record) => (
                            <tr key={record.id}>
                                <td>{record.no}</td>
                                <td>{record.name}</td>
                                <td>{record.std}</td>
                                <td>{record.grade}</td>
                                <td>
                                    <button type='button' onClick={() => handleEdit(record)}>Edit</button>
                                    <button type='button' onClick={() => handleDelete(record.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}
