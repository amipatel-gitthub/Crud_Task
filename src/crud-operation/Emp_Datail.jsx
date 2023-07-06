import React, { useState } from "react";

export default function Emp_Datail() {
  const [formData, setFormData] = useState({});
  const [records, setRecords] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.empid) {
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
    const updatedRecords = records.map((record) =>
      record.id === data.id ? { ...record, ...data } : record
    );
    setRecords(updatedRecords);
  };

  const deleteRecord = (id) => {
    const updatedRecords = records.filter((record) => record.id !== id);
    setRecords(updatedRecords);
  };

  const handleEdit = (record) => {
    setFormData(record);
  };

  const handleDelete = (id) => {
    deleteRecord(id);
  };

  return (
    <div className="container">
      <div className="mx-auto mt-4 form-design p-3" style={{ width: "600px" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="text-center mt-3">Employee Detail</h4>
          <hr />
          <div className="form-outline mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
              required
              name="name"
              value={formData.name || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-outline mb-2">
            <input
              type="number"
              className="form-control"
              placeholder="Phone Number"
              required
              name="pno"
              value={formData.pno || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-outline mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Employee Id No."
              required
              name="empid"
              value={formData.empid || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-outline mb-2">
            <select
              className="form-select"
              value={formData.selectedOption || ""}
              name="selectedOption"
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select Option Here
              </option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="Front End Developer">Front End Developer</option>
              <option value="Back End Developer">Back End Developer</option>
              <option value="Web Designer">Web Designer</option>
              <option value="Graphics Designer">Graphics Designer</option>
              <option value="SEO">SEO</option>
            </select>
          </div>
          <div className="form-outline mb-2">
            <input
              type="number"
              className="form-control"
              placeholder="Salary"
              required
              name="salary"
              value={formData.salary || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-outlinemb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Working days"
              min="1"
              max="31"
              required
              name="days"
              value={formData.days || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </div>
        </form>
      </div>

      <table className="table table-hover table-bordered mt-3 text-center mb-3">
        <thead>
          <tr>
            <th className="text-secondary">Emp-Id</th>
            <th className="text-secondary">Emp-name</th>
            <th className="text-secondary">Phone-no.</th>
            <th className="text-secondary">Salary</th>
            <th className="text-secondary">Working Days</th>
            <th className="text-secondary">Crud Operation</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.empid}</td>
              <td>{record.name}</td>
              <td>{record.pno}</td>
              <td>{record.salary}</td>
              <td>{record.days}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-light me-2"
                  onClick={() => handleEdit(record)}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => handleDelete(record.id)}
                >
                  <i className="bi bi-trash3-fill"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
