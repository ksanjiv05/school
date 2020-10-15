import React from 'react'
import { Button } from '../../util/Button'
import Util from '../../util/Util'



export const Login = () => {
  return (
    <center>
      <div className="login">
        <form>
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input id="email" type="text" className="form-control" name="email" placeholder="Email" />
          </div>
          <div className="input-group" style={{ marginBottom: "8px" }}>
            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
            <input id="password" type="password" className="form-control" name="password" placeholder="Password" />

          </div>
          <div className="input-group" >
            <a href="#" className="fgt"><u>forget password ?</u></a>
          </div>
          <div className="input-group">
            <input type="button" style={Object.assign(Util.ButtonX, Util.Font, { borderRadius: "17px" })} className="form-control " value="Login" />
          </div>
          <div className="input-group">
            <input type="button" style={Object.assign(Util.ButtonY, Util.Font, { borderRadius: "17px" })} className="form-control " value="Register" />
          </div>

        </form>
      </div>
    </center>
  )
}
