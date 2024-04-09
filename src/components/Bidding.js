import React from "react";
import "./Bidding.css";

function Bidding({ setOpenModal }) {
  return (
    <div className="modalBackground">
  <div className="modalContainer">
    <div className="titleCloseBtn">
      <button onClick={() => setOpenModal(false)}>X</button>
    </div>
    <div className="title">
      <h3>Inital amount : </h3>
    </div>
    <div className="body">
      <p>Last Bid : </p>
    </div>
    <div className="formContainer">
      <form>
        <input type="number" placeholder="Enter your bid" />
        
        <div className="footer">
          <button id="cancelBtn" onClick={() => setOpenModal(false)}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>

  );
}

export default Bidding;