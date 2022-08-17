import React from 'react';
import './Post.css';
import share from '../../img/share.png';
import comment from '../../img/comment.png';
import like from '../../img/like.png';
// import notlike from '../../img/notlike.png';


const Post= ({post}) => {
  return (
    <div className="post">
        <img src={post.media} alt="" />
    
        <div className="post__reactions">
            <img src={like} alt="" />
            <img src={comment} alt="" />
            <img src={share} alt=""/>
        </div>


            <span> 300 Likes</span>
            <span>45 Comments</span>

            <div className="post__details">
                <span><strong>Justina</strong></span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nesciunt ducimus labore aliquid, adipisci fuga dignissimos!</span>
                {/* <span className='textmuted m-2' style={{fontsize:'13px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. tae repellendus </span> */}
            </div>
      </div>

  )
}

export default Post

