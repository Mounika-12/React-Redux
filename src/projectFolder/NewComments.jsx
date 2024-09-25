import React from 'react'
import { useSelector } from 'react-redux'

const NewComments = () => {

  const userComments = useSelector((state)=> state.newComments.comments)
  return (
    <div className='commentSection'>
        Comments: 
        {userComments.map((item, index) =>{
          return (
            <div className='subscriberName'>
              <ul key={index}>
                <li>{item}</li>
              </ul>
            </div>
          )
        })}
    </div>
  )
}

export default NewComments