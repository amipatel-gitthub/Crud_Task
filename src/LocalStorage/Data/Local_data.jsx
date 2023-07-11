import React, { useEffect, useState } from 'react'
import Data from "./User_LocalData.json"



export default function Local_data() {

    return (
        <>
            <div className='container-fluid'>
                <table className='table  table-hover table-bordered mt-5 text-center mb-3'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th colSpan={2}>Address</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th colSpan={3}>Company</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Data.map((value) => (
                            <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.username}</td>
                                <td>{value.email}</td>
                                <td>{value.address.street},{value.address.suite},{value.address.city},{value.address.zipcode}</td>
                                <td>lat:{value.address.geo.lat},lng:{value.address.geo.lng}</td>
                                <td>{value.phone}</td>
                                <td>{value.website}</td>
                                <td>{value.company.name},{value.company.catchPhrase},{value.company.bs}</td>
                            </tr>
                        ))}
                    </tbody> 
                </table>
            </div>
        </>
    )
}
