import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Read = () => {
  const [data, setData] = useState([])

  const getdata = () => {
    axios.get('https://646b73cd7d3c1cae4ce3d323.mockapi.io/Crud_WebData')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
  }

  const handledelet = (id) => {
    axios.delete(`https://646b73cd7d3c1cae4ce3d323.mockapi.io/Crud_WebData/${id}`)
      .then(() => {
        getdata();
      })
  }

  const setLocalstorage = (id, name, email) => {
    localStorage.setItem("id", id)
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  }

  useEffect(() => {
    getdata();
  }, [])

  return (
    <>
      <div className="container">

        <div className="box d-flex justify-content-between mt-2">
          <h2>Read</h2>
          <Link to="/">
            <button className='btn btn-dark'>Create</button>
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Edit</th>
              <th scope="col">Delet</th>
            </tr>
          </thead>
          {
            data.map((eachData) => {
              return (
                <tbody>
                  <tr>
                    <th scope="row">{eachData.id}</th>
                    <td>{eachData.name}</td>
                    <td>{eachData.email}</td>
                    <td>
                      <Link to="/Update">
                        <button className='btn btn-success' onClick={() => {
                          setLocalstorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }}>Edit</button>
                      </Link>
                    </td>
                    <td>
                      <button className=' btn btn-danger' onClick={() => { handledelet(eachData.id) }}>Delet</button>
                    </td>
                  </tr>
                </tbody>
              )
            })
          }
        </table>
        <Link to='/'>
          <button type="submit" className="btn btn-info mx-2" >Back</button>
        </Link>
      </div>

    </>
  )
}

export default Read;

