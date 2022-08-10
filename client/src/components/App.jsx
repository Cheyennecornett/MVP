import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SignInPage from './SignInPage.jsx'
import FormModal from './FormModalPersonData.jsx';


function App() {

  const [data, setData] = useState('');


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
    <div className="app">

      {/* <SignInPage/> */}
      <div row={0} col={0} sizeX={4} sizeY={3} content="<div class='panel-content'>Content Area</div>" header="<div class='e-header-text'>Header Area</div><div class='header-border'></div>">
                </div>
    </div>
  )
}

export default App;