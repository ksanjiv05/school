import React from 'react';
import { NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const alert = ['You are successfully applide ! ', `Please Upload document`];
export const Navbar = (props) => {
  const { isAuth } = props;
  console.log(
    window.innerWidth + '-----------------------------------' + isAuth,
    '---',
    props
  );
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li className="active">
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li className="dropdown">
              {/* <a  href="about">
               
              </a> */}
              <NavLink
                className="dropdown-toggle"
                data-toggle="dropdown"
                to="/about"
              >
                About <span className="caret"></span>
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/about/school">About School</NavLink>
                  {/* <a href="about/school">About School</a> */}
                </li>
                <li>
                  <NavLink to="/about/teacher">About Teachers</NavLink>
                  {/* <a href="#"></a> */}
                </li>
                <li>
                  <NavLink to="/about/student">About Students</NavLink>
                  {/* <a href="#">About Students</a> */}
                </li>
              </ul>
            </li>
            <li>
              <NavLink exact to="/notification">
                Notification
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/admission">
                Admission
              </NavLink>
            </li>
            {isAuth ? (
              <li>
                <NavLink exact to="/library">
                  Library
                </NavLink>
              </li>
            ) : (
              ''
            )}
            <li>
              <NavLink exact to="/download">
                Downloads
              </NavLink>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {isAuth ? (
              <li>
                <Popup
                  trigger={
                    <a href="#">
                      <span className="badge badge-edit">2</span>
                      <span className="glyphicon glyphicon-bell"></span> Alert
                    </a>
                  }
                  position="bottom center"
                >
                  <div>
                    <ul>
                      {alert.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  </div>
                </Popup>
              </li>
            ) : (
              ''
            )}
            <li>
              <NavLink exact to="/reg">
                <span className="glyphicon glyphicon-user"></span> Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/login">
                <span className="glyphicon glyphicon-log-in"></span> Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    //)
  );
};
