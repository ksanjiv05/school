import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { toaster } from 'evergreen-ui';

let statex = true;
export const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateFrom = async (key) => {
    let value = '';
    switch (key) {
      case 'password':
        // console.log('-----------');
        value =
          data['password'].length < 8
            ? 'Password length should be minimum 8 charecter'
            : value;

        console.log('_value', value);
        await handelErrors(key, value);
        break;
      case 'email':
        // value = data['email'].length < 5 ? 'Please enter valid email' : '';
        const emailrg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        console.log('val--------------', data[key]);
        value = emailrg.exec(data[key]) ? '' : 'Please enter valid email';
        console.log('_value', value);
        await handelErrors(key, value);
        break;
    }
  };

  const handelErrors = async (key, value) => {
    setErrors((prevData) => ({
      ...prevData,
      [key]: value,
    }));

    if (value.length > 1) {
      statex = false;
      console.log('state x', statex);
    } else {
      if (statex == false) statex = false;
      else statex = true;
      console.log('state x else', statex);
    }
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    statex = true;
    Object.keys(data).map(async (key, i) => {
      await validateFrom(key);
    });

    console.log(errors, 'state x===', statex);
    if (statex) {
      axios
        .post(process.env.REACT_APP_API_URL + '/api/login', data)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem('accessToken', res.data.token);
          sessionStorage.setItem('email', data.email);
          // toast.success('Loged In 👌');
          toaster.success('Loged In Successfully ', {
            duration: 2,
          });
        })
        .catch((err) => {
          toaster.danger(' Invalid cread !!', {
            duration: 2,
          });
        });
    }
  };
  const handelChange = async (ev) => {
    const { name, value } = ev.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    //validateFrom(name);
    Object.keys(data).map(async (key, i) => {
      await validateFrom(key);
    });
  };

  // useEffect(() => {
  //   Object.keys(data).map(async (key, i) => {
  //     await validateFrom(key);
  //   });
  // }, [data]);

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
          <div className="col-md-6 error-div">
            <span className="error">{errors.email}</span>
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
          <div className="col-md-6 error-div">
            <span className="error">{errors.password}</span>
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
              // disabled={!statex}
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
