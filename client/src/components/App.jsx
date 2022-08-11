import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SignInPage from './SignInPage.jsx'
import FormModal from './FormModalPersonData.jsx';
import Dashboard from './Dashboard.jsx'
import Dashboard2 from './Dashboard2.jsx'

function App() {

  const [data, setData] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState('')

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

     {!loggedIn && <SignInPage setLoggedIn={setLoggedIn} setUser={setUser}/>}

    {loggedIn && <Dashboard2 setUser={setUser} user={user}/>}
    </div>
  )
}

export default App;