import React from 'react'
import { PiUser, PiUserBold, PiUserFill } from 'react-icons/pi'

const Profile = () => {
  return (
    <div className="rounded-full p-3 border border-primary-200 flex justify-center items-center">
      <PiUserBold className="text-white" size={20} />
    </div>
  )
}

export default Profile
