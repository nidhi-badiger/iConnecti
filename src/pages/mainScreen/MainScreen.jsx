import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import MainContent from './MainContent/MainContent'
import "./mainScreen.css"

const MainScreen = () => {
  return (
    <div className='content'> 
        <Sidebar/>
        <MainContent  />
    </div>
  )
}

export default MainScreen