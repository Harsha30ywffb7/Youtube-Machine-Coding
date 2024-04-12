import React from 'react'
import Menu from './Menu'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector(store=> store.app.isMenuOpen);

  //as an early return 
  if(!isMenuOpen) return null

  return (
    <div className='w-48'>
      <div className='p-2 shadow-md'>
       
        <ul>
          <Link to='/'><li>Home</li></Link>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
        <h1 className='font-bold pt-2 '>You</h1>
        <ul>
          <li>Your Channel</li>
          <li>Playlists</li>
          <li>Watch later</li>
          <li>Your videos</li>
          <li>Liked videos</li>
        </ul>
        <h1 className='font-bold pt-2'>Subscriptions</h1>
        <ul>
          <li>Akshay saini</li>
          <li>Google</li>
          <li>Dsa Strivers</li>
          <li>Food vlogs</li>
          <li>exploration</li>
        </ul>

      </div>
    </div>
  )
}

export default Sidebar