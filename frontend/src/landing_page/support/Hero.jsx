import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div className="container-fluid p-5" style={{backgroundColor:"#F6F6F6"}}>
      <div className="row" style={{width:"95%"}}>
        <div className="col-4 px-5 ms-5">
          <h1>Support Portal</h1>
        </div>

        <div className="col-6 text-end" style={{marginLeft:"152px"}}>
          <button
            style={{
              width: "20%",
              
              color: "white",
              backgroundColor: "#387ED1",
            }}
            className=" btn"
          >
            My tickets
          </button>
        </div>
          
      </div>
      <div className="row mt-3  ms-4" style={{width:"92%"}}>
        <div class="input-group mb-3" style={{ height: "50px"}}>
          <span class="input-group-text">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <div className=" px-5 ms-5">
         <p>The search and ticket feature do not work right now, but if you hire me i will surely make the features work </p>
        </div>
      
    </div>
  );
}

export default Hero;
