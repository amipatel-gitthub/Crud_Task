import React, { useState } from 'react'

export default function Self_Work() {

  const [inputs, setInputs] = useState({
    name: " ",
    password: " "
  })

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputs", inputs)
  }


  return (
    <>
      <div className='container'>
        <div className="mx-auto mt-4 form-design p-3" style={{ width: "600px" }}>
          <form className='' onSubmit={handleSubmit}>
            <h4 className="text-center">Self Work</h4>
            <hr />

            <label className='fw-bolder'>Name : </label>
            <input type='text' className='form-control' placeholder='enter username'
              name='name'
              value={inputs.name || " "}
              onChange={handleChange}
            /><br />


            <label className='fw-bolder'>Password : </label>
            <input type='password' className='form-control' placeholder='enter valid password'
              name='password'
              value={inputs.password || " "}
              onChange={handleChange}
            />

            <div className='m-auto text-center mt-3'>
              <button type='submit' className='px-5 btn btn-info text-white fw-bold'>Add</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
