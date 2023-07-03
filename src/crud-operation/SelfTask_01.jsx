import React, { useState } from "react";

export default function SelfTask_01() {
  const [formData, setFormData] = useState({});
  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name] : e.target.value,
        [e.target.snm] : e.target.value,
        [e.target.city] : e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();


    setFormData({})
  }



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="mx-auto col-10 col-md-8 col-lg-6 mb-5">
            <form onSubmit={handleSubmit} >
              <h3 className="text-center pt-4">Simple Form</h3>
              <hr />
              <input
                type="text"
                placeholder="Name"
                className="form-control mt-4"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                placeholder="Surname"
                className="form-control"
                name="snm"
                value={formData.snm || ""}
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                placeholder="City"
                className="form-control"
                name="city"
                value={formData.city || ""}
                onChange={handleChange}
              />
              <div className="m-auto text-center ">
                <button type="submit" className="btn btn-primary m-3 px-4">
                  Print
                </button>
              </div>
            </form>
          </div>
        </div>

        <table className="table table-bordered mt-3 text-center mb-3">
          <thead>
            <tr>
              <th className="text-secondary">Name</th>
              <th className="text-secondary">Surname</th>
              <th className="text-secondary">City</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
