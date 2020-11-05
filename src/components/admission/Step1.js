import React from "react";
import Util from "../../util/Util"
import NumberFormat from 'react-number-format';

function Step1(props) {
  return (


    // <center>
    <div >
      <div className="step-progress"><h1><span class="label label-info">1</span></h1></div>
      <div className="login admission">

        <form>
          <div className="row">
            <div className="col-md-6">
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" className="form-control" name="name" value={props.getState('name')} onChange={props.handleChange} placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label for="DOB">Date of Birth:</label>
                {/* <input type="text" className="form-control" id="" /> */}
                <NumberFormat format="##/##/####" name="dob" placeholder="DD/MM/YY" value={props.getState('dob')} onChange={props.handleChange} className="form-control" />
              </div>
              <div class="form-group">
                <label for="father">Father's Name :</label>
                <input name="father" type="text" className="form-control" id="father" value={props.getState('father')} onChange={props.handleChange} placeholder="Father's Name" />
              </div>
              <div className="form-group">
                <label for="mother">Mother's Name:</label>
                <input type="text" name="mother" className="form-control" id="mother" value={props.getState('mother')} onChange={props.handleChange} placeholder="Mother's Name" />
              </div>
            </div>


            <div className="col-md-6">
              <div class="form-group">
                <label for="name">Last Name:</label>
                <input type="text" name="lastname" className="form-control" id="name" value={props.getState('lastname')} onChange={props.handleChange} placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label for="fathermob">Contact No. :</label>
                {/* <input type="text" className="form-control" id="" /> */}
                <NumberFormat format="+91 ##########" name="fathermob" value={props.getState('fathermob')} onChange={props.handleChange} className="form-control" />
              </div>
              <div className="form-group">
                <label for="mothermob">Contact No. :</label>
                {/* <input type="text" className="form-control" id="" /> */}
                <NumberFormat format="+91 ##########" value={props.getState('mothermob')} onChange={props.handleChange} className="form-control" name="mothermob" />
              </div>

              <div className="form-group">
                <label for="ocu">Father's Occupation. :</label>
                <input type="text" className="form-control" name="occupation" id="" onChange={props.handleChange} value={props.getState('occupation')} />
                {/* <NumberFormat format="+91 (###) ###-####" className="form-control" name="mob" /> */}
              </div>
            </div>
          </div>
          <div className="form-group">
            <label style={{ float: "none" }} class="checkbox-inline"><input type="radio" id="M" name="gender" onChange={() => props.setState("gender", "M")} value={true} />  Male</label>
            <label style={{ float: "none" }} class="checkbox-inline"><input type="radio" id="F" onChange={() => props.setState("gender", "F")} name="gender" value={() => props.getState('gender') == "F" ? true : false} />  Female</label>
            <label style={{ float: "none" }} class="checkbox-inline"><input type="radio" name="gender" id="T" onChange={() => props.setState("gender", "T")} value={() => props.getState('gender') == "T" ? true : false} />  Transgender</label>
          </div>
          <div className="form-group">
            {
              <button style={{ color: "#6f7275" }} className="next prev" disabled={props.step.isFirst()} onClick={props.prev}>
                Previous
				</button>
            }
            {props.step.hasNext() && <button className="next" onClick={props.next}>Next</button>}
          </div>
        </form>

      </div>
    </div>
    // </center>

  );
}

export default Step1;