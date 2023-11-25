import Button from '@/components/ui/Button'
import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import useUser from '@/stores/user'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { PiUser, PiUserBold, PiUserFill } from 'react-icons/pi'

const Profile = () => {
  const router = useRouter()
  const { user, logout } = useUser()

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className="relative">
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="transition-all cursor-pointer active:scale-[0.96] rounded-full p-3 border border-primary-200 flex justify-center items-center"
      >
        <PiUserBold className="text-white" size={20} />
      </div>

      {isDropdownOpen && (
        <div className="flex flex-col gap-4 whitespace-nowrap animate-scale-in absolute z-50 bg-white border rounded right-0 mt-2 p-3">
          <div>
            <Title className="text-lg text-neutral-700">{user.nome}</Title>
            <Text>{user.email}</Text>
          </div>

          <div>
            <Button
              onClick={async () => {
                await router.replace('/')

                logout()
                localStorage.removeItem('curesharp.accessToken')
              }}
              variant="outline"
            >
              Sair
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
