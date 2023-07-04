import React, { useState } from "react";

export default function Table_Form() {
    const [formData, setFormData] = useState({});
    const [records, setRecords] = useState([]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.user_id]: e.target.value,
            [e.target.name]: e.target.value

        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.id) {
            updateRecord(formData);
        } else {
            createRecord(formData);
        }
        setFormData({});
    };

    const createRecord = (data) => {
        const id = Date.now().toString();
        const newRecord = { id, ...data };
        setRecords([...records, newRecord]);
    };

    const updateRecord = (data) => {
        const updateRecords = records.map((record) =>
            record.id == data.id ? { ...record, ...data } : record
        );
        setRecords(updateRecords);
    };

    const DeleteRecord = (id) => {
        const updateRecords = records.filter((record) => record.id !== id);

        setRecords(updateRecords);
    };

    const handleEdit = (record) => {
        setFormData(record);
    };

    const handleDelete = (id) => {
        DeleteRecord(id);
    };

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
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="user_id"
                                        value={formData.user_id || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-outline mb-2 m">
                            <div className="row">
                                <div className="col-3">
                                    <label className="fw-bolder">User name : </label>
                                </div>
                                <div className="col-9">
                                    <input
                                        type="text "
                                        className="form-control"
                                        name="name"
                                        value={formData.name || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="m-auto text-center">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block my-1 px-3"
                            >
                                Print
                            </button>
                        </div>
                    </form>
                </div>

                <table className="table  table-hover table-bordered mt-5 text-center mb-3">
                    <thead>
                        <tr>
                            <th className="text-secondary">User Id</th>
                            <th className="text-secondary">User name </th>
                            <th className="text-secondary">Crud</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record) => (

                            <tr key={record.id}>
                                <td>{record.user_id}</td>
                                <td>{record.name}</td>
                                <td>
                                    <button type="button" onClick={() => handleEdit(record)}>
                                        Edit
                                    </button>
                                    <button type="button" onClick={() => handleDelete(record.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
