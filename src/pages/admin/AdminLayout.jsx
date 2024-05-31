import { useQuery } from '@tanstack/react-query'
import Header from "./components/header/Header"
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { getUserProfile } from '../../services/users'
import Spinner from '../../components/Spinner'
import toast from 'react-hot-toast'

const AdminLayout = () => {
  const navigate = useNavigate()
  const userState = useSelector(state => state.user)

  const { data: profileData, isLoading: profileIsLoading, error: profileError } = useQuery({
    queryFn: () => {
        return getUserProfile({ token: userState.userInfo.token })
    },
    queryKey: ["profile"]
  })

  if(userState?.userInfo && userState.userInfo?.admin === false) {
    toast.error("You are not allowed to access the admin panel")
    navigate("/")
  }

  if(profileIsLoading) {
    return <Spinner />
  }

  return (
    <div className="flex flex-col h-full lg:flex-row">
        <Header />
        <main className="bg-[#f9f9f9] bg-cover h-full flex-1 p-4 lg:p-6">
            <Outlet />
        </main>
    </div>
  )
}

export default AdminLayout