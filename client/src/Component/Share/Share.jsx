import React, {useState, useRef} from 'react';
import './Share.css';
import profileImg from '../../img/pic14.jpeg'
import {
  UilScenery, 
  UilPlayCircle, 
  UilLocationPoint,
  // UilSchedule
} from '@iconscout/react-unicons';

const Share = () => {
  const imageRef = useRef();
  const [image, setImage] = useState(null);

  const imageChange = (e) => {
    let img = e.target.files[0];

    setImage({
      sapa: URL.createObjectURL(img)
    });
  }

  return (
    <div className="post__share my-3">
       <img src={profileImg} alt="" /> 

      <div>
        <input type="text" placeholder="What's on your mind..?" />
        <div className="post__media mt-3">
          <div 
            className="post__media__option"
            onClick={() => imageRef.current.click()}
            style={{color: '#4cb256'}}
            >
            <UilScenery />
            <span>Photo</span>
          </div>
          <div className="post__media__option" style={{color: '#4a4eb7'}}>
            <UilPlayCircle />
            <span>Video</span>
          </div> 
          <div className="post__media__option" style={{color: '#ef5757'}}>
            <UilLocationPoint />
            <span>Location</span>
            
          </div>
          {/* <div className="post__media__option" style={{color: '#4cb256'}}>
            <UilSchedule />
            Schedule
          </div> */}

          <button className="share__btn">Share</button>
          <div style={{display: 'none'}}>
            <input 
              type="file" 
              ref={imageRef}
              onChange={imageChange}
              />
          </div>
        </div>
        {
          image ? 
          <div className="share__img__preview">
            <img src={image.sapa} alt="" />
          </div> : null
        }

        
      </div>
    </div>
  )
}

export default Share