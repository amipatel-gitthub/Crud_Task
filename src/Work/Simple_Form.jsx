// this form use only data print not for update ,delete

import React, { useState } from "react";

export default function Simple_Form() {
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

        console.log("Data : ", formData);

        setFormData({});

        createRecord(formData);
    };

    const createRecord = (data) => {
        const id = Date.now().toString();
        const newRecord = { ...data, id };
        setRecords([...records, newRecord]);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Full Name : </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name || ""}
                    onChange={handleChange}
                />
                <button type="submit">Print</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <td>Full Name </td>
                    </tr>
                </thead>
                <tbody>
                    {records.map((record) => (
                        <tr key={record.id}>
                            <td>{record.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
