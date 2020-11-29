import React, { useState, useEffect } from 'react';
import { toaster } from 'evergreen-ui';
import NumberFormat from 'react-number-format';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { pure } from 'recompose';

//style={Object.assign(Util.ButtonY, Util.Font, { borderRadius: "17px" })}
let statex = true;
export const Register = () => {
  const [data, setData] = useState({
    cpassword: '',
    dob: '',
    email: '',
    lname: '',
    name: '',
    password: '',
    phone: '',
    username: '',
  });
  const [email, setEmail] = useState({});
  const [errors, setErrors] = useState({
    dob: '',
    email: '',

    name: '',
    password: '',
    phone: '',
    username: '',
  });
  // const [ready, setReady] = useState(true);
  const validateFrom = (key) => {
    let value = '';
    switch (key) {
      case 'password':
        // console.log('-----------');
        value =
          data['password'].length < 8
            ? 'Password length should be minimum 8 charecter'
            : value;
        value =
          data[key] != data['cpassword']
            ? 'Password and confirm password must be match'
            : value;

        handelErrors(key, value);
        break;
      case 'email':
        // value = data['email'].length < 5 ? 'Please enter valid email' : '';
        const emailrg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        value = emailrg.exec(data[key]) ? '' : 'Please enter valid email';

        handelErrors(key, value);
        break;

      case 'phone':
        if (data.phone != undefined && data.phone.length == 10) break;
        data.phone = data.phone != undefined ? data.phone.split(' ')[1] : '';
        value =
          data.phone == undefined || data.phone.length != 10
            ? 'Please enter vaild phone number '
            : '';
        handelErrors(key, value);
        break;
      case 'name':
        value = data.name.length < 5 ? 'Please enter valid name' : '';
        handelErrors(key, value);
        break;
      case 'username':
        value = data.username.length < 5 ? 'Please enter valid usename' : '';
        handelErrors(key, value);
        break;
    }
  };

  const handelErrors = (key, value) => {
    setErrors((prevData) => ({
      ...prevData,
      [key]: value,
    }));
    if (value.length > 1) {
      statex = false;
    } else {
      if (statex == false) {
        statex = false;
      } else statex = true;
    }
  };
  const clickHandle = async () => {
    data.email = email.email;
    statex = true;
    Object.keys(data).map((key, i) => {
      validateFrom(key);
    });

    if (statex) {
      axios
        .post(process.env.REACT_APP_API_URL + '/api/user', data, {})
        .then((res) => {
          if (res.status == 200) {
            console.log(res.data.success.token);
            localStorage.setItem('accessToken', res.data.success.token);
            sessionStorage.setItem('email', res.data.success.email);

            toaster.success('SignUp Scccessfully ', {
              duration: 2,
            });
          }
        })
        .catch((err) => {
          toaster.danger('Server Error ', {
            duration: 2,
          });
        });
    } else {
      console.log('------------uuu------');
    }
  };
  const handelEmail = (ev) => {
    const { name, value } = ev.target;
    setEmail((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handelChange = (ev) => {
    const { name, value } = ev.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(email);
  }, [email]);

  return (
    <center>
      <ToastContainer />
      <div className="login" style={{ width: '45%' }}>
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-user"></i>
                </span>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  onChange={(ev) => handelChange(ev)}
                />
              </div>
              <div className="col-md-6 error-div">
                <span className="error">{errors.name}</span>
              </div>
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-calendar"></i>
                </span>
                <input
                  id="dob"
                  type="date"
                  className="form-control"
                  name="dob"
                  placeholder="Date of Birth"
                  onChange={(ev) => handelChange(ev)}
                />
              </div>

              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-envelope"></i>
                </span>
                <input
                  id="username"
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Username"
                  onChange={(ev) => handelChange(ev)}
                />
              </div>
              <div className="col-md-6 error-div">
                <span className="error">{errors.username}</span>
              </div>
              <div className="input-group">
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
            </div>

            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-user"></i>
                </span>
                <input
                  id="lname"
                  type="text"
                  className="form-control"
                  name="lname"
                  placeholder="Last Name"
                  onChange={(ev) => handelChange(ev)}
                />
              </div>

              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-envelope"></i>
                </span>
                <input
                  id="email"
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  onBlur={(ev) => handelEmail(ev)}
                />
              </div>
              <div className="col-md-6 error-div">
                <span className="error">{errors.email}</span>
              </div>
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-phone"></i>
                </span>
                {/* <input id="tel" type="text" className="form-control" name="phone" onChange={ev=>handelChange(ev)} /> */}
                <NumberFormat
                  format="+91 ##########"
                  className="form-control"
                  name="phone"
                  placeholder="contact number"
                  onChange={(ev) => handelChange(ev)}
                />
              </div>
              <div className="col-md-6 error-div">
                <span className="error">{errors.phone}</span>
              </div>
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-lock"></i>
                </span>
                <input
                  id="cpassword"
                  type="password"
                  className="form-control"
                  name="cpassword"
                  placeholder="Re Enter Password"
                  onChange={(ev) => handelChange(ev)}
                />
              </div>
              <div className="col-md-6 error-div">
                <span className="error">{errors.password}</span>
              </div>
            </div>

            <div className="input-group" style={{ padding: '0% 4% 0% 4%' }}>
              <input
                type="button"
                style={{
                  backgroundColor: 'rgb(1 6 39)',
                  color: '#e2dada',
                  borderRadius: '17px',
                  marginTop: '27px',
                }}
                className="form-control "
                value="Register"
                onClick={clickHandle}
              />
            </div>
          </div>
        </form>
      </div>
    </center>
  );
};
