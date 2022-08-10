import React from 'react';

import styled from 'styled-components';

function Dashboard(props) {

  const dashLogo = `https://res.cloudinary.com/dr8hijrgb/image/upload/v1660165852/Novus-logos_vfykui.jpg`



  return (

<div className="app">
<img src={dashLogo} className="logo-dash"></img>
<header>

  <h2 className="dash-header">Welcome Cheyenne!</h2>
</header>

<section>
  <nav>
    <ul>
      <li><a href="#">Edit Profile</a></li>
      <li><a href="#">TBD</a></li>
      <li><a href="#">TBD</a></li>
    </ul>
  </nav>

  <article>
    <h1>User Stats?</h1>
    <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
    <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>

  </article>


</section>

<footer>
  <p>Footer</p>
</footer>

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



export default Dashboard;