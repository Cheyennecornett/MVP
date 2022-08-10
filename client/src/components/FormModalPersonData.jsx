import React from 'react';
import styled from 'styled-components';

const FormModal = ({setPersonFormModal}) => {
  return (
    <div className="modal">


      <Modalpop className="modal-pop" role="dialog" aria-modal="true">

        <form>
         <h3>Let's Gather Some Basic Info!</h3>
          <label>First Name*</label><br></br>
          <input type="text" placeholder="Example: John" required="required" ></input>

          <label>Last Name*</label><br></br>
          <input type="text" placeholder="Example: Doe"
            required="required" ></input><br></br>

          <label>Email*</label><br></br>
          <input type="text" placeholder="Example: john.doe@gmail.com"
            required="required"></input><br></br><br></br>



          <label>Gender*</label><br></br>
          <select name="gender" id="gender" className="required">
            <option value="Gender">Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Prefer Not To Say">Prefer Not To Say</option>
          </select><br></br><br></br>


          <label for="birthday">Birthday*</label>
          <input type="date" id="birthday" name="birthday"></input><br></br><br></br>
          {/* <input type="submit"></input><br></br><br></br> */}



          <label>Foods I'm Willing To Eat*</label><br></br>
          <input type="text" placeholder="Example: Chicken, Potatoes, Milk"
            required="required"></input><br></br><br></br>


          <label>Foods I Want To Eat*</label><br></br>
          <input type="text" placeholder="Example: Chicken, Potatoes, Milk"
            required="required"></input><br></br><br></br>


          <label>What Motivates Me?*</label><br></br>
          <input type="text" placeholder="Example: Extra Time On Ipad, Playing Outside, New Toy, etc "
            required="required"></input><br></br><br></br>


          <label>Username*</label><br></br>
          <input type="text" placeholder="Example: John1"
            required="required" ></input><br></br><br></br>

          <label>Password*</label><br></br>
          <input type="text" placeholder="Example: password"
            required="required" ></input><br></br><br></br>

        <input type="submit"></input><br></br><br></br>
        </form><br></br>

       <div className="button-container">
       <button type="register" onClick={() => setPersonFormModal(false)}>Cancel</button>
       </div>

      </Modalpop>
      <ModalOverlay className="modal-overlay"></ModalOverlay>
    </div>)




}


export const Modalpop = styled.div
  `
  background: #fff;
  border: 2px solid #aaa;
  border-radius: 5px;
  z-index: 999;
  width: 500px;
  height: 768px;
  margin: auto;
  margin-top: 450px;
  padding: 1em 2em 2em;
  position: relative;
`

export const ModalOverlay = styled.div
  `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: #000;
  opacity: 0.75;
`

// export const Button = styled.button
//   `margin: 10px;

// `






export default FormModal;