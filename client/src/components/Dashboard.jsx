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

    <header className="user-data">
      <p className="user-header">Points: 1 </p>

    </header>
    <p>Welcome to Novus. This App is made to help children with ARFID track daily food interactions and to assist Dietians during treatment. This App will be HIPAA Compliant. </p>
    <p>TESTTTTTT</p>

  </article>

  <article>
    <header className="user-data">
    <p className="user-feed-post">Add New Entry</p>
    </header>
    <p>FEED</p>
  </article>




</section>

{/* <footer>
  <p>Footer</p>
</footer> */}

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