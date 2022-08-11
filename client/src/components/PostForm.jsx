import React from 'react';
import styled from 'styled-components';

const PostFormModal = (props) => {
  return (
    <div className="modal">


      <Modalpop className="modal-pop" role="dialog" aria-modal="true">

        <form>
         <h3>Daily Entry</h3>

          <label>Foods I Tried Today*</label><br></br><br></br>
          <input type="text" placeholder="Example: Chicken, Potatoes, Milk"
            required="required" onChange={(e) => {props.setPostFoodData(e.target.value )}}></input><br></br><br></br><br></br>


          <label>How Was The Experience?*</label><br></br><br></br>
          <select name="foodTriedScale" id="scale" className="required" onChange={(e) => {props.setPostRateData(e.target.value)}}>
            <option value="scale">Select One</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select><br></br>
          <small>(Rate From A Scale Of 1 to 10, 1 = Difficult And 10 = Easy)</small>
          <br></br><br></br><br></br>


          <label>What Motivated Me?*</label><br></br><br></br>
          <input type="text" placeholder="Example: Extra Time On Ipad, Playing Outside, New Toy, etc "
            required="required"   onChange={(e) => {props.setPostMotoData(e.target.value )}}></input><br></br><br></br>




        <input type="submit" onClick={(e) => {props.handlePost()}}></input><br></br><br></br>
        </form><br></br>

       <div className="button-container">
       <button type="register" onClick={(e) => {props.setPostAdd(false)}}>Cancel</button>
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
  height: 825px;
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






export default PostFormModal;