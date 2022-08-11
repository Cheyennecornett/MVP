import React from 'react';
import PostEntry from './PostEntry.jsx'

function UserFeed(props) {




    return (
      <div>

    {props.posts ? props.posts.map(p => <PostEntry post={p} key={p._id} />) : '(No Entries Created Yet!)'}
  </div>
);


}


export default UserFeed;