import React from 'react'
import LeftSide from '../../Component/LeftSide/LeftSide'
import PostSide from '../../Component/PostSide/PostSide'
import RightSide from '../../Component/RightSide/RightSide'
import './Timeline.css'


const Timeline = () => {
  return (
    <div className="timeline row">
      {/* Left side */}
    <LeftSide />

      {/* Post side */}
      <PostSide />


      {/* Right side */}
      <RightSide />

    </div>
  )
}
 export default Timeline