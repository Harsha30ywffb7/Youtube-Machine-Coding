import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_URL } from '../constants'
import Video from './Video';
import { Link } from 'react-router-dom';
const Videocontainer = () => {

  const [videos, setVideos] = useState([]);

  const getVideos =async()=>{
    const videos = await fetch(YOUTUBE_API_URL);
    const json = await videos.json();
    console.log(json.items);
    setVideos(json.items);
  }

  useEffect(()=>{
    getVideos();
  },[])
  return (
    <div className='flex flex-wrap'>
        {
          videos.map((video)=>
          <Link to={'/watch?v='+video.id}><Video info={video}/></Link>)
        }
    </div>
  )
}

export default Videocontainer