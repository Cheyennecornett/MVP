import React, {useState, useEffect} from 'react';
import axios from 'axios';
import FormModal from './FormModalPersonData.jsx';




function SignInPage(props) {
  const [personFormModal, setPersonFormModal] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const logo =`https://res.cloudinary.com/dr8hijrgb/image/upload/v1660164805/Novus-logos_rmyicv.jpg`
   // User Login info

   const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    },
    {username: "shiba",
     password: "nation"}
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info - use mongo next
    const userData = database.find((user) => user.username === uname.value);


    if (userData) {
      if (userData.password !== pass.value) {

        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        props.setLoggedIn(true);
        props.setUser(userData.username)
      }
    } else {

      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );


const renderForm = (
  <div className="form">
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
        {renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
        {renderErrorMessage("pass")}
      </div>
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>
  </div>
);

  return (
    <div className="app">


       <img src={logo} className="logo"></img>
       <h2> Something Catchy </h2>

      {personFormModal && <FormModal setPersonFormModal={setPersonFormModal}/>}
      <div className="login-form">
      <div className="title">Sign In</div>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
       </div>
       <div className="login-form">
       <small>Don't have an account?</small><br></br>
        <div className="button-container">
        <button type="register" onClick={(e) => setPersonFormModal(true)}>Register</button>

        </div>


       </div>
    </div>

  )
}

export default SignInPage;


