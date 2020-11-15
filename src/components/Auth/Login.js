import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export const Login = () => {
  const [data, setData] = useState({});
  const handleSubmit = (ev) => {
    ev.preventDefault();
    axios
      .post(process.env.REACT_APP_API_URL + '/api/login', data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('accessToken', res.data.token);
        sessionStorage.setItem('email', data.email);
        toast.success('Loged In 👌');
      })
      .catch((err) => {
        toast.error(' Invalid cread !!!');
      });
  };
  const handelChange = (ev) => {
    const { name, value } = ev.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <center>
      <ToastContainer />
      <div className="login">
        <form>
          <div className="input-group">
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-user"></i>
            </span>
            <input
              id="email"
              type="text"
              className="form-control"
              name="email"
              placeholder="Email"
              onChange={(ev) => handelChange(ev)}
            />
          </div>
          <div className="input-group" style={{ marginBottom: '8px' }}>
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-lock"></i>
            </span>
            <input
              id="password"
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={(ev) => handelChange(ev)}
            />
          </div>
          <div className="input-group">
            <a href="#" className="fgt">
              <u>forget password ?</u>
            </a>
          </div>
          <div className="input-group">
            <input
              type="button"
              style={{
                backgroundColor: 'rgb(1 6 39)',
                color: '#e2dada',
                borderRadius: '17px',
              }}
              className="form-control "
              value="Login"
              onClick={(ev) => handleSubmit(ev)}
            />
          </div>
          <div className="input-group">
            <input
              type="button"
              style={{
                backgroundColor: 'rgb(93 20 70)',
                color: '#e2dada',
                borderRadius: '17px',
              }}
              className="form-control "
              value="Register"
            />
          </div>
        </form>
      </div>
    </center>
  );
};
