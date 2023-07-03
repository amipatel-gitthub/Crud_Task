import React, { useState } from "react";

export default function Simple_CrudTask() {

  const [formdata, setFormData] = useState({
    id : "",
    name : "",
    pno : "",
    salary : "", 
    days:""
  })
  const [records, setRecords] = useState([])

  const handleChange = (e) => {
    setFormData({
      ...formdata,
    
      [e.target.name]: e.target.value,
     
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formdata.id) {
      updateRecord(formdata)
    }
    else {
      createRecord(formdata)
    }

    setFormData({})
  }

  const createRecord = (data) => {
    const id = Date.now().toString();
    const newRecord = { id, ...data };
    setRecords([ ...records, newRecord ])
  }

  const updateRecord = (data) => {
    const updateRecords = records.map((record) =>
      record.id == data.id ? { ...record, ...data } : record
    );

    setRecords(updateRecords)
  }

  const deleteRecord = (id) => {
    const updatedRecords = records.filter((record) => record.id !== id);
    setRecords(updatedRecords);
  }

  const handleEdit = (record) => {
    setFormData(record)
  }

  const handleDelete = (id) => {
    deleteRecord(id)
  }



  return (
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
                <input type="number" className="form-control" name="id"
                  value={formdata.id || ""}
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
                  value={formdata.name || ""}
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
                  value={formdata.pno || ""}
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
                  value={formdata.salary || ""}
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
                  value={formdata.days || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="m-auto text-center">
            <button
              type="submit"
              className="btn btn-primary btn-block mb-4 px-3"
            >
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
            <th className="text-secondary">Crud </th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => {
            return (
              <tr >
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.pno}</td>
                <td>{record.salary}</td>
                <td>{record.days}</td>
                <td>
                  <button type="button" onClick={() => handleEdit(record)}>Edit</button>

                  <button type="button" onClick={() => handleDelete(record.id)}>Delete</button>
                </td>
              </tr>
            )

          })}

        </tbody>
      </table>
    </div>
  );
}
