import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='listItem'>
            <button className='listItemButton'>Activate Profile</button>
          </li>
          <li className='listItem'>
            <button className='listItemButton'>Reset Password</button>
          </li>
          <li className='listItem'>
            <button className='listItemButton'>New Posting</button>
          </li>
          <li className='listItem'>
            <button className='listItemButton'>Update Posting</button>
          </li>
          <li className='listItem'>
            <button className='listItemButton'>Search Candidates</button>
          </li>
          <li className='listItem'>
            <button className='listItemButton'>View active Working profiles</button>
          </li>
          <li className='listItem'>
            <button className='listItemButton'>View Earlier Postings</button>
          </li>
        </ul>

      </div>
    
    </div>
  )
}

export default Sidebar