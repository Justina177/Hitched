 import React from 'react';
 import Post from '../Post/Post';
 import './Posts.css';
 import img1 from '../../img/postpic1.jpg';
 import img2 from '../../img/postpic2.jpg';
 import img3 from '../../img/postpic3.JPG';

 const Posts = () => {
   let postData = [
     {
       media: img1,
       user: 'Chidinma',
       desc: 'A short description',
       likes: 47,
       comments: 432
     },

     {
       media: img2,
       user: 'Justina',
       desc: 'A short description',
       likes: 234,
       comments: 4
     },

     {
       media: img3,
       user: 'John',
       desc: 'Love your profile',
       likes: 897,
       comments: 780
     }
   ];


return (
  <div className="posts">
    {
      postData.map((post, id) => (
        <Post post={post} key={id} />
      ))
    }
  </div>
)
}

 export default Posts

