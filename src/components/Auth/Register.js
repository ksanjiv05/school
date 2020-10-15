import React from 'react'
import Util from '../../util/Util'
import NumberFormat from 'react-number-format';
export const Register = () => {
  return (
    <center>
      <div className="login">
        <form>
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input id="name" type="text" className="form-control" name="name" placeholder="Name" />
          </div>
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-calendar"></i></span>
            <input id="dob" type="date" className="form-control" name="dob" placeholder="Date of Birth" />
          </div>
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
            <input id="email" type="text" className="form-control" name="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-phone"></i></span>
            {/* <input id="tel" type="tel" className="form-control" name="mob" placeholder="Mobile Number" /> */}
            <NumberFormat format="+91 (###) ###-####" className="form-control" name="mob" />
          </div>
          <div className="input-group" >
            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
            <input id="password" type="password" className="form-control" name="password" placeholder="Password" />

          </div>
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
            <input id="password" type="repassword" className="form-control" name="repassword" placeholder="Re Enter Password" />

          </div>

          <div className="input-group">
            <input type="button" style={Object.assign(Util.ButtonY, Util.Font, { borderRadius: "17px" })} className="form-control " value="Register" />
          </div>

        </form>
      </div>
    </center>
  )
}
