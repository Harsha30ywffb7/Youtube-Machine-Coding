import React from 'react'

const Chatmessage = ({name,message}) => {
  return (
    <div className='flex items-center m-2 shadow-sm'>
        <img className='h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="Header profile" />
        <div>
            <p>
                <span className='font-bold mx-2 text-sm'>{name}</span>
                <span className='text-sm'>{message}</span>
            </p>
        </div>
    </div>
  )
}

export default Chatmessage