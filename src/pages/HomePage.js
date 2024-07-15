import React from 'react'
import SideBar from '../components/SideBar'

const HomePage = () => {
  return (
    <div className="flex">
    <SideBar />
    <div className="flex-1 p-7">
      <div className='text-2xl font-semibold'>
        <h1>ASSIGN TASKS</h1>
      </div>
    </div>
  </div>
  )
}

export default HomePage

