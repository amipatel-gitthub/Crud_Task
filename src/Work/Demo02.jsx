import React, { useState } from "react";

export default function Demo02() {
    const [formData, setFormData] = useState({});
    const [records, setRecords] = useState([]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("User Data : ", formData);

        if (formData.id) {
            updateRecord(formData);
        } else {
            CreateRecord(formData);
        }

        setFormData({});
    };

    const CreateRecord = (data) => {
        const id = Date.now().toString();
        const newRecord = { ...data, id };
        setRecords([...records, newRecord]);
    };

    const updateRecord = (data) => {
        const updatedRecord = records.map((record) =>
            record.id === data.id ? { ...record, ...data } : record
        );

        setRecords(updatedRecord);
    };

    const deleteRecord = (id) => {
        const updatedRecord = records.filter((record) => record.id !== id);

        setRecords(updatedRecord);
    };

    const handleEdit = (record) => {
        setFormData(record);
    };

    const handleDelete = (id) => {
        deleteRecord(id);
    };

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                <h4 className="text-center">Demo - 02</h4>
                        <hr />
                    <label>Name : </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name || ""}
                        onChange={handleChange}
                    />

                    <label>surname : </label>
                    <input
                        type="text"
                        name="surname"
                        value={formData.surname || ""}
                        onChange={handleChange}
                    />

                    <button type="submit">Submit</button>
                </form>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                        </tr>
                    </thead>

                    <tbody>
                        {records.map((record) => (
                            <tr key={record.id}>
                                <td>{record.name}</td>
                                <td>{record.surname}</td>
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
