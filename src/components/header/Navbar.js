import React from 'react'

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
            <li className="active"><a href="#">Home</a></li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Page 1-1</a></li>
                <li><a href="#">Page 1-2</a></li>
                <li><a href="#">Page 1-3</a></li>
              </ul>
            </li>
            <li><a href="#">Notification</a></li>
            <li><a href="#">Admission</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
    //)
  )
}
