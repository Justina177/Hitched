import React from 'react';
import './UserCard.css';
import cover from '../../img/cover.jpg';
import profile from '../../img/jus.jpg'
 
const UserCard = () => {
  return (
    <div className="userCard my-4">
      <div className="card__images">
        <img src={cover} alt="" />
        <img src={profile} alt="" />
      </div>

      <div className="card__names">
        <span>ENENCHE JUSTINA</span>
        <span>Fullstack Developer</span>
      </div>   

      <div className="card__status">
        <hr />
        <div>
          <div className="follow">
            <span>24</span>
            <span>Followings</span>
          </div>

          <div className="line"></div>

          <div className="follow">
            <span>3,307</span>
            <span>Followers</span>
          </div>

          <div className="line"></div>

          <div className="follow">
            <span>71</span>
            <span>Posts</span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default UserCard