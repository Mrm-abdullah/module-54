import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const handleUserAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const user = { email, name }
    console.log(user);

    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const newUser = [...users, data]
        setUsers(newUser)
        form.reset();
      })
  }

  return (
    <>

      <h1>module 54 user management</h1>
      <p> Number of users : {users.length} </p>
      <form onSubmit={handleUserAdd}>
        <input type="text" name='email' />
        <input type="text" name='name' />
        <input type="submit" value="submit" />
      </form>
      {
        users.map((user) => <div key={user.id}>{user.id} , {user.name}, {user.email}, <a href={`/users/${user.id}`}>Go</a> <br /></div>)
      }
    </>
  )
}

export default App
