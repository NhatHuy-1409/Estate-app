import React, { useContext } from "react"
import "./ProfileUpdatePage.scss"
import { AuthContext } from "../../context/AuthContext"

function ProfileUpdatePage() {
  const { currentUser } = useContext(AuthContext)
  console.log({ currentUser })
  const { username, avatar, email } = currentUser ?? {}

  const handleSubmit = async (e) => {
    const formData = new FormData(e.target)
  }

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" defaultValue={email} />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
        </form>
      </div>
      <div className="sideContainer">
        <img src="" alt="" className="avatar" />
      </div>
    </div>
  )
}

export default ProfileUpdatePage
