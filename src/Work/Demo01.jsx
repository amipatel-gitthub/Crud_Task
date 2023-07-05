import React, { useState } from "react";

export default function Demo01(changeTextAndColor) {
  const [formData, setFormData] = useState({});
  const [records, setRecord] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data : ", formData);

    if (formData.id) {
      updateRecord(formData);
    } else {
      createRecord(formData);
    }
    setFormData({});
  };

  const createRecord = (data) => {
    const id = Date.now().toString();
    const newRecord = { ...data, id };
    setRecord([...records, newRecord]);
  };

  const updateRecord = (data) => {
    const updatedRecords = records.map((record) =>
      record.id == data.id ? { ...record, ...data } : record
    );

    setRecord(updatedRecords);
  };

  const deleteRecord = (id) => {
    const updatedRecords = records.filter((record) => record.id !== id);

    setRecord(updatedRecords);
  };

  const handleEdit = (record) => {
    setFormData(record);
  };

  const handleDelete = (id) => {
    deleteRecord(id);
  };

  return (
    <>
      <div className="mt-2">
        <form onSubmit={handleSubmit}>
          <label>Name : </label>
          <input
            type="text"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
          />

          <label>Surname : </label>
          <input
            type="text"
            name="surname"
            value={formData.surname || ""}
            onChange={handleChange}
          />

          <button type="submit" text={changeTextAndColor ? 'Add' : 'Edit'}  />
        </form>
      </div>
      <table className=" table-bordered mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Crud Operation</th>
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
    </>
  );
}
