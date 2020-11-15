import React from 'react';
import { NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const alert = ['You are successfully applide ! ', `Please Upload document`];
export const Navbar = () => {
  console.log(
    window.innerWidth +
      '-----------------------------------' +
      window.innerHeight
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
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                About <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">About School</a>
                </li>
                <li>
                  <a href="#">About Teachers</a>
                </li>
                <li>
                  <a href="#">About Students</a>
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
            <li>
              <NavLink exact to="/library">
                Library
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/download">
                Downloads
              </NavLink>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
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
