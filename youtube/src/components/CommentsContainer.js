import React from 'react'

const CommentsContainer = () => {
  return (
    <div className=' '>
        <p className='text-xl font-bold p-2 m-1'>Comments</p>
        <Comment data={comments[0]}/>
    </div>
  )
}

const Comment =({data})=>{
    return(
        <div className='p-5 m-2'>comment</div>
    )
}

const comments = [
    {
        name:"harsha",
        text:"this my comment",
        reply:[

        ]
    },
    {
        name:"harsha",
        text:"this my comment",
        reply:[
            
        ]
    },
    {
        name:"harsha",
        text:"this my comment",
        reply:[
            {
                name:"harsha",
                text:"this my comment",
                reply:[
                    
                ]
            },
            {
                name:"harsha",
                text:"this my comment",
                reply:[
                    {
                        name:"harsha",
                        text:"this my comment",
                        reply:[
                            
                        ]
                    }
                ]
            }
        ]
    }
]

export default CommentsContainer