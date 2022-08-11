import React from 'react';
import styled from 'styled-components';



function Dashboard2(props) {

  const dashLogo = `https://res.cloudinary.com/dr8hijrgb/image/upload/v1660165852/Novus-logos_vfykui.jpg`



  return (
    <div>
    <header>
   <img src={dashLogo} className="logo-dash"></img>
    </header>
    <div class="wrapper">

   <div class="one">


   </div>
   <div class="two">

   </div>
   <div class="three">Sidebar?</div>
   <div class="four">Points/Rewards</div>
   <div class="five">Daily Entry</div>
   <div class="six">Six</div>
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