import React, { useState } from 'react';

function Employee_Data() {
  const [formData, setFormData] = useState({});
  const [records, setRecords] = useState([]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [e.target.salary]: e.target.value,

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleInputChange}
          />
          <label>salary:</label>
          <input
            type="text"
            name="salary"
            value={formData.salary || ''}
            onChange={handleInputChange}
          />
        </div>
        {/* Add more form input fields for other data */}
        <button type="submit">Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            {/* Add more table headers for other data */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.salary}</td>
              {/* Add more table cells for other data */}
              <td>
                <button onClick={() => handleEdit(record)}><i className="bi bi-pencil-square"></i></button>{' '}
                <button onClick={() => handleDelete(record.id)}><i className="bi bi-trash3-fill"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee_Data;


  


// import React, { useState } from "react";

// function Employee_Data(prpdata) {

//     const [name, setName] = useState('')
//     const [pno, setPno] = useState('')
//     const [eid, setEid] = useState('')
//     const [salary, setSalary] = useState('')
//     const [days, setDays] = useState('')

//     const postData = (e) => {
//         e.preventDefault()
//         console.log("Employee Name : " + name);
//         console.log("Phone number : " + pno);
//         console.log("Employee Id : " + eid);
//         console.log("employee Salary : " + salary)
//         console.log("Working Days : " + days)
//     }

//     return (
//         <>
//             <div className="container">
//                 <div className="row">
//                     <div className="mx-auto col-10 col-md-8 col-lg-6 mb-5">
//                         <form onSubmit={postData}>
//                             <h5 className="text-center mt-3">Employee Data</h5> <hr required />
//                             <div className="form-outline mb-2">
//                                 <input type="text" className="form-control" placeholder='Full name' required value={name} onChange={(e) => setName(e.target.value)} />
//                             </div>
//                             <div className="form-outline mb-2">
//                                 <input type="number" className="form-control" placeholder='Phone Number' required value={pno} onChange={(e) => setPno(e.target.value)} />
//                             </div>
//                             <div className="form-outline mb-2">
//                                 <input type="number" className="form-control" placeholder='Employee Id No.' required value={eid} onChange={(e) => setEid(e.target.value)} />
//                             </div>
//                             <div className="form-outline mb-2">
//                                 <select className="form-select" aria-label="Default select example" required>
//                                     <option >Open this select menu</option>
//                                     <option value="1">Full Stack Devloper</option>
//                                     <option value="2">Front End Devloper</option>
//                                     <option value="3">Back End Devloper</option>
//                                     <option value="4">Web Designer</option>
//                                     <option value="5">graphics designer </option>
//                                     <option value="6">SEO</option>
//                                 </select>
//                             </div>
//                             <div className="form-outline mb-2">
//                                 <input type="number" className="form-control" placeholder='Salary' required value={salary} onChange={(e) => setSalary(e.target.value)} />
//                             </div>
//                             <div className="form-outline mb-3">
//                                 <input type="number" className="form-control" placeholder='Working days' min="1" max='31' required value={days} onChange={(e) => setDays(e.target.value)} />
//                             </div>
//                             <div className='text-center'>
//                                 <button type="submit" className="btn btn-primary btn-block ">Submit</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//                 <table className="table  table-hover table-bordered mt-3 text-center mb-3">
//                     <thead>
//                         <tr>
//                             <th className="text-secondary">Emp-name </th>
//                             <th className="text-secondary">Phone-no. </th>
//                             <th className="text-secondary">Emp-Id no. </th>

//                             <th className="text-secondary">Salary </th>
//                             <th className="text-secondary">Working Days </th>
//                             <th className="text-secondary">Crud Operation </th>
//                         </tr>
//                     </thead>
//                     <tbody>
                     
//                         {prpdata.map((value)=> {
//                             return(
//                                 <tr className="border">
//                                     <td>{value.name}</td>
//                                     <td>{value.pno}</td>
//                                     <td>{value.eid}</td>
//                                     <td>{value.salary}</td>
//                                     <td>{value.days}</td>
//                                 </tr>
//                             )
//                         })}
//                         {/* {dataprops.map((value) => {
//                             return (
//                                 <tr className="border">
//                                     <td>{value.name}</td>
//                                     <td>{value.pno}</td>
//                                     <td>{value.eid}</td>
//                                     <td>{value.salary}</td>
//                                     <td>{value.days}</td>
//                                 </tr>

//                             )
//                         })} */}

//                     </tbody>
//                 </table>
              
//             </div>
//             {/* <td>
//                                 <button type="button" className="btn btn-light me-2"><i className="bi bi-pencil-square"></i></button>
//                                 <button type="button" className="btn btn-light"><i className="bi bi-trash3-fill"></i></button>
//                             </td> */}
//         </>
//     )
// }

// export default Employee_Data;