import React, { useEffect, useState } from 'react';
import Collapsible from 'react-collapsible';
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';

const Index = () => {
  const [isAdmissionStatus, setIsAdmissionStatus] = useState(0);
  useEffect(() => {
    const email = sessionStorage.getItem('email');
    console.log('run', email);
    axios
      .post(process.env.REACT_APP_API_URL + '/api/admissionstatus', {
        email: email,
      })
      .then((res) => {
        if (res.status == 200 && res.data.admission_Status != null) {
          console.log(
            parseInt(res.data.admission_Status),
            'enrolled',
            res.data
          );
          setIsAdmissionStatus(parseInt(res.data.admission_Status));
        }
        //console.log("respond0000000000000000",res.data);
      });
  });
  return (
    <div className="container">
      <Collapsible trigger="Applay">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
        {/* <input type="button" className="btn btn-success play" onClick={()=><Redirect to="/admission" />} value="Applay" /> */}
        {isAdmissionStatus == 0 ? (
          <NavLink className="btn btn-success play" to="/apply">
            Applay
          </NavLink>
        ) : (
          ''
        )}
      </Collapsible>
      <Collapsible trigger="Document Upload">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
        {isAdmissionStatus == 1 ? (
          <NavLink className="btn btn-primary play" to="/uploaddoc">
            Document Upload
          </NavLink>
        ) : (
          ''
        )}
      </Collapsible>
      <Collapsible trigger="Preview">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
        {isAdmissionStatus == 2 ? (
          <NavLink className="btn btn-info play" to="/preview">
            Preview
          </NavLink>
        ) : (
          ''
        )}
      </Collapsible>
    </div>
  );
};

export default Index;
