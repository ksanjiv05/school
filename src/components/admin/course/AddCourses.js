import React, { useState } from 'react';
import CustomModle from '../../../util/CustomModle';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export const AddCourses = (props) => {
  const [acadmic, setAcadmic] = useState(true);
  const [data, setData] = useState({});

  const validationCheck = () => {
    if (JSON.stringify(data).length <= 2) {
      alert('Please enter valid data');
      return 0;
    }
    return data.hasOwnProperty('ccode') &&
      data.hasOwnProperty('ctitle') &&
      data.hasOwnProperty('bclass') &&
      acadmic
      ? true
      : data.hasOwnProperty('stream');
  };
  const handelClick = () => {
    if (!validationCheck()) {
      alert('Please enter all valid field !');
      return null;
    }
    if (data.bclass == 'x') {
      alert('Please Choose valid class !');
      return null;
    }
    if (data.stream == 'xx') {
      alert('Please choose valid stream !');
      return null;
    }

    axios
      .post('http://localhost:3001/api/addcourse', data)
      .then((res) => {
        console.log(res.data);
        props.ack(false);
        toast.success('Course Successfully Added ');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to add Course');
      });
  };
  const handelChange = (ev) => {
    const { name, value } = ev.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(data);
  };
  return (
    <div>
      <ToastContainer />
      <div className="add-staff" data-toggle="modal" data-target="#course">
        <center>+</center>
      </div>
      <div>
        <CustomModle
          modelId="course"
          headerTitle={'Course'}
          handelClick={handelClick}
        >
          <div
            className="login"
            style={{
              backgroundColor: '#03393ee6',
              marginTop: 0,
              width: '100%',
            }}
          >
            <div style={{ height: 45, width: 400 }}>
              <label className="checkbox-inline rcontainer">
                <input
                  type="radio"
                  name="acadmictype"
                  className="checkbox-primary"
                  // checked
                  defaultChecked
                  onClick={(ev) => {
                    // console.log(ev.target.value);
                    setAcadmic(true);
                  }}
                  value="1"
                />
                <span class="checkmark"></span>
                Secondary
              </label>
              <label className="checkbox-inline rcontainer">
                <input
                  type="radio"
                  name="acadmictype"
                  className="checkbox-primary"
                  onClick={(ev) => {
                    // console.log(ev.target.value);
                    setAcadmic(false);
                  }}
                  value="0"
                />
                <span class="checkmark"></span>
                Sr. Secondary
              </label>
            </div>
            <div className="form-group">
              <label>Course Code :</label>
              <input
                type="text"
                className="form-control"
                name="ccode"
                onChange={(ev) => handelChange(ev)}
                placeholder="Enter course code"
              />
              <span className="error">
                {data.hasOwnProperty('ccode') && data.ccode.length <= 2
                  ? 'Please enter valid course code !'
                  : ''}
              </span>
            </div>
            <div className="form-group">
              <label>Course title :</label>
              <input
                type="text"
                name="ctitle"
                className="form-control"
                onChange={(ev) => handelChange(ev)}
                placeholder="Enter Course title"
              />
              <span className="error">
                {data.hasOwnProperty('ctitle') && data.ctitle.length <= 3
                  ? 'Please enter valid course title !'
                  : ''}
              </span>
            </div>

            <div className="form-group">
              <label>Belong Class :</label>

              <select
                className="form-control"
                name="bclass"
                onChange={(ev) => handelChange(ev)}
              >
                <option value="x" key="x">
                  ---Select Class--
                </option>

                {acadmic
                  ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v, i) => (
                      <option value={v} key={v}>
                        {'class ' + v}
                      </option>
                    ))
                  : [11, 12].map((v, i) => (
                      <option value={v} key={v}>
                        {'class ' + v}
                      </option>
                    ))}
              </select>
              <span className="error">
                {data.hasOwnProperty('bclass') && data.bclass == 'x'
                  ? 'Please choose valid class !'
                  : ''}
              </span>
            </div>
            {acadmic ? (
              ''
            ) : (
              <div class="form-group">
                <label>Select Stream :</label>
                <select
                  className="form-control"
                  name="stream"
                  onChange={(ev) => handelChange(ev)}
                  // onBlur={setAcadmic(false)}
                >
                  <option value="xx" key="xx">
                    ----Select Acadmic Type----
                  </option>
                  <option value="arts" key="arts">
                    Arts
                  </option>
                  <option value="secince" key="secince">
                    Secince
                  </option>
                  <option value="commerce" key="commerce">
                    Commerce
                  </option>
                </select>
                <span className="error">
                  {data.hasOwnProperty('stream') && data.stream == 'xx'
                    ? 'Please choose valid stream  !'
                    : ''}
                </span>
              </div>
            )}
          </div>
        </CustomModle>
      </div>
    </div>
  );
};
