import React from 'react'

const LogOut = () => {
  return (
    <div>
        Log Out Page
        <button onClick={() => localStorage.removeItem('token')}>Logout</button>
    </div>
  )
}

export default LogOut