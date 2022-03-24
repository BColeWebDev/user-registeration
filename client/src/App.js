import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/form';
import User from "./components/user"
import usersAPI from "../src/services/users"
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [data, setdata] = useState([]);
  console.log(data)
  useEffect(() => {
    getData()
  }, []);


  const handleSubmit = (input) => {
    const user = {
      id: data.length + 1,
      ...input
    }
    usersAPI.createUser(user)
      .catch(e => {
        console.log(e);
      });
  }


  const getData = async () => {
    usersAPI.getAll()
      .then(res => setdata(res.data))
      .catch(e => {
        console.log(e);
      });

  }
  const handleUpdate = (id) => {
    console.log(id)
    getData()
  }
  const handleDelete = (id) => {
    usersAPI.deleteUser(id)
      .catch(e => { console.log(e) })
    getData()
  }

  return (
    <div className="App">

      <h1>Hello World</h1>
      <div className='table-container'>

        {data.length === 0 ? <p>No users created</p> :
          <>
            <p>Results: {data.length}</p>
            <table>
              <thead>
                <tr>
                  <th>ID#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Developer</th>
                  <th>Delete</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map(data =>
                    <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.firstname}</td>
                      <td>{data.lastname}</td>
                      <td>{data.email}</td>
                      <td>{data.development}</td>
                      <td><button onClick={() => { handleDelete(data.id) }}>Delete</button></td>
                      <td>{data.createdAt}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>

          </>
        }
      </div>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
