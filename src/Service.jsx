import React from "react";
// import { NavLink } from "react-router-dom";


import img from './bg.jpg';
const Service=()=>{
    return(
       <>
       <section id="header" className="d-flex align-items-center my-5">
  <div className="container-fluid nav_bg">
  <div className ="row">
  <div className="col-10 mx-auto">
  <div className="row">
  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
  <h1> Gk <strong className="myname">Gorakh Gupta</strong></h1>
  <h3 className="my-3">
      Testing
  </h3>
  <div className="mt-3">
<a className="btn btn-outline-success btn-get-started" href="https://www.youtube.com/">Click me</a>
  </div>

  </div>
  <div className="col-lg-6 order-1 order-lg-2 header-img">
  <img alt="img" src={img} className="img-fluid animated"/>

  </div>
  </div>

  </div>

  </div>

  </div>
  </section>
       </>
        
    )
  
}
export default Service;
