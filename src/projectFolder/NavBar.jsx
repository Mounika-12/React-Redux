import React from 'react'
import { useSelector } from 'react-redux'

const NavBar = () => {

  const totalLikes = useSelector((state)=>state.counter.value)

  const subscribersCount = useSelector((state)=>state.newSubscriber.users)

  const commentsCount = useSelector((state)=> state.newComments.comments)

  return (
    <div className='navSection'>
        <div className="navTitle">
            Redux
        </div>
        <div className="navUser">
            Subscribers: {subscribersCount.length}
        </div>
        <div className="navComments">
            Comments: {commentsCount.length}
        </div>
        <div className="navLikes">
            Likes: {totalLikes}
        </div>
    </div>
  )
}

export default NavBar