import React, { useState } from "react";

export default function ButtonNameChange() {
    const [formData, setFormData] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [records, setRecords] = useState([]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("User Name : ", formData);

        if (isEditing) {
            updateRecord(formData);
            setIsEditing(false);
        } else {
            createRecord(formData);
        }

        setFormData({});
    };

    const createRecord = (data) => {
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
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        deleteRecord(id);
    };

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h4 className="text-center">Button Name Change</h4>
                    <hr />
                    <label>Name :</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name || ""}
                        onChange={handleChange}
                    />

                    <button type="submit">
                        {isEditing ? "Edit again" : "Print"}
                    </button>
                </form>

                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Change...</td>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record) => (
                            <tr key={record.id}>
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
