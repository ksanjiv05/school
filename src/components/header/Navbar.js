import React from 'react'
import { NavLink } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const Navbar = () => {

  console.log(window.innerWidth + "-----------------------------------" + window.innerHeight);
  return (
    // window.innerWidth < 500 ? (
    //   <nav className="navbar navbar-inverse">
    //     <div className="container-fluid">
    //       <ul className="nav navbar-nav">
    //         <li className="active"><a href="#">Home</a></li>
    //         <li><a href="#">Notification</a></li>
    //         <li><a href="#">Admission</a></li>
    //       </ul>
    //       <ul className="nav navbar-nav navbar-right">
    //         <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
    //         <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
    //       </ul>
    //     </div>
    //   </nav>
    // ) : (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li className="active"><NavLink  exact to="/">
            Home
              </NavLink></li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">About <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">About School</a></li>
                <li><a href="#">About Teachers</a></li>
                <li><a href="#">About Students</a></li>
              </ul>
            </li>
            <li><NavLink  exact to="/notification">Notification</NavLink></li>
            <li><NavLink  exact to="/admission">
              Admission
              </NavLink></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
          
          <li>
          <Popup trigger={<a href="#" ><span class="badge badge-edit">2</span><span class="glyphicon glyphicon-bell"></span> Alert</a>}  position="bottom center">
            <div>Popup content here !!</div>
          </Popup></li>
            <li><NavLink  exact to="/reg"><span className="glyphicon glyphicon-user"></span> Sign Up</NavLink></li>
            <li><NavLink exact to='/login'><span className="glyphicon glyphicon-log-in"></span> Login</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
    //)
  )
}
