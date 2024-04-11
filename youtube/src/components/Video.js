

import React from 'react'

const Video = ({info}) => {

   const {snippet , statistics}= info;
   const {localized, thumbnails} = snippet;
  return (
    <div className='w-60 shadow-md mx-2 my-3'>
        <img className='w-60 p-3 rounded-lg  ' src={thumbnails.medium.url} alt='video image'/>
        <p className='font-semibold text-xs line-clamp-2 px-3 pt-1 '>{localized.title}</p>
        <p className='text-bg-400 font-thin text-xs px-3 mt-2'>{snippet.channelTitle}</p>
        <p className='text-bg-400 font-thin text-xs px-3  line-clamp-1' > <span>{statistics.viewCount} views </span> . <span>{snippet.publishedAt}</span></p>        
    </div>
  )
}

export default Video