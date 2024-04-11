import React from 'react'


const list = ['All', "Gaming", 'coding', 'Music', 'cricket', 'Football', 'Sports', 'Ipl', 'Science', 'Gate', "IIT"]
const Button =({name}) =>{
  return (<>
  <button className='px-1 m-2 py-1 rounded-md bg-slate-100 text-sm'>{name}</button>
  </>)
}
const Btnlist = () => {
  return (
    <div  className='flex'>
      {
        list.map((b)=><Button name={b}/>)
      }
    </div>
  )
}

export default Btnlist