import React, { useState } from 'react'

export default function NameChange() {

    const [formData, setFormData] = useState({})
    const [records, setRecords] = useState([])
    const [isEditing, setIsEditing] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // console.log("user Name : ", formData);

        if (isEditing) {
            updateRecord(formData)
            setIsEditing(false)
        }
        else {
            createRecord(formData)
        }
        setFormData({})
    }

    const createRecord = (data) => {
        const id = Date.now().toString()
        const newRecord = { ...data, id }
        setRecords([...records, newRecord])
    }

    const updateRecord = (data) => {
        const updatedRecords = records.map((record) =>
            record.id === data.id ? { ...record, ...data } : record
        )

        setRecords(updatedRecords)
    }

    const deleteRecord = (id) => {
        const updatedRecords = records.map((record) => record.id !== id)

        setRecords(updatedRecords)
    }

    const handleEdit = (record) => {
        setFormData(record)
        setIsEditing(true)
    }

    const handleDelete = (id) => {
        deleteRecord(id)
    }

    return (
        <>
            <div className='container'>

                <form onSubmit={handleSubmit}>

                    <label>Name : </label>
                    <input type='text' name='name'
                        value={formData.name || ""}
                        onChange={handleChange}
                    />

                    <button type='submit'>
                        {isEditing ? "Update" : "Add"}
                    </button>
                </form>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Change...</th>
                        </tr>
                    </thead>

                    <tbody>
                        {records.map((record) => (
                            <tr key={record.id}>
                                <td>{record.name}</td>
                                <td>
                                    <button type='button' onClick={() => handleEdit(record) }>Edit</button>
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
