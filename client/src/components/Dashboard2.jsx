import React, {useState} from 'react';
import styled from 'styled-components';
import UserFeed from './UserFeed.jsx';
import PostFormModal from './PostForm.jsx';
import axios from 'axios';





function Dashboard2(props) {

  const dashLogo = `https://res.cloudinary.com/dr8hijrgb/image/upload/v1660165852/Novus-logos_vfykui.jpg`

  const [postAdd, setPostAdd] = useState(false)
  const [postFoodData, setPostFoodData] = useState('')
  const [postRateData, setPostRateData] = useState('')
  const [postMotoData, setPostMotoData] = useState('')

 console.log('username', props.user)
  const postFormCollection = {
    user: props.user,
    FoodsTried: postFoodData,
    Rating: postRateData,
    Moto: postMotoData
  };
  console.log(postFormCollection);
  const handlePost = (e) => {

    event.preventDefault();

      console.log('post data', postFormCollection);
      axios.post('/posts', postFormCollection).then((response) => {
        console.log(response)
        setPostAdd(false);
      }).catch((err) => {
        console.log(err)
      })
  }

  return (

    <div>
    <header>
   <img src={dashLogo} className="logo-dash"></img>
   <h1 className="welcome">Welcome Cheyenne!</h1>
    </header>
    <div class="wrapper">

   <div class="one">


   </div>
   <div class="two">
    TWOOOOO


   </div>
   <div class="three"> 3-Sidebar?</div>
   <div class="four">4-Points/Rewards</div>
   <div class="five">
    <div>
   <h1>5-USER FEED</h1>
    {postAdd && <PostFormModal setPostAdd={setPostAdd} setPostFoodData={setPostFoodData} setPostRateData={setPostRateData} setPostMotoData={setPostMotoData} handlePost={handlePost}/>}
   <button type="register" onClick={() => {setPostAdd(true)}}>Add Entry</button>
  <UserFeed/>
    </div>
    </div>
   <div class="six">6-Six</div>
 </div>

 </div>

  )
}


{/* <div class="wrapper">
  <div class="one">
    <img src={dashLogo} className="logo-dash"></img>
  </div>
  <div class="two">
    <header className="page-header">
      <nav className="page-header">
        <a>Welcome Cheyenne!</a>
      </nav>
    </header>
  </div>
  <div class="three">Sidebar?</div>
  <div class="four">Points/Rewards</div>
  <div class="five">Daily Entry</div>
  <div class="six">Six</div>
</div> */}



export default Dashboard2;