import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SignInPage from './SignInPage.jsx'
import FormModal from './FormModalPersonData.jsx';
import Dashboard from './Dashboard.jsx'


function App() {

  const [data, setData] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //    getData();
  // }, [])

  const getData = () => {
    axios.get('/').then((response) => {
      setData(response.data);
      console.log(data)
    });
  }




  return (
    <div className="appp">

     {/* {!loggedIn && <SignInPage setLoggedIn={setLoggedIn}/>} */}
     {/* {loggedIn && <Dashboard/>} */}
    <Dashboard/>
    </div>
  )
}

export default App;