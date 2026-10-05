import React, { useEffect, useState } from 'react'

const User = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div className="p-6">

      <h2 className="text-2xl font-bold text-center mb-6">Users</h2>

      <div className="grid grid-cols-3 gap-6">

        {users.map((user) => (
          <div key={user.id} className="bg-black text-white p-4 rounded">

            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>

          </div>
        ))}

        </div>

    </div>
  )
}

export default User