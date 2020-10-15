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
                <input type="name" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label for="DOB">Date of Birth:</label>
                {/* <input type="text" className="form-control" id="" /> */}
                <NumberFormat format="##/##/####" placeholder="DD/MM/YY" className="form-control" name="mob" />
              </div>
              <div class="form-group">
                <label for="father">Father's Name :</label>
                <input type="father" className="form-control" id="father" placeholder="Father's Name" />
              </div>
              <div className="form-group">
                <label for="mother">Mother's Name:</label>
                <input type="text" className="form-control" id="mother" placeholder="Mother's Name" />
              </div>
            </div>


            <div className="col-md-6">
              <div class="form-group">
                <label for="name">Last Name:</label>
                <input type="name" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label for="DOB">Contact No. :</label>
                {/* <input type="text" className="form-control" id="" /> */}
                <NumberFormat format="+91 (###) ###-####" className="form-control" name="mob" />
              </div>
              <div className="form-group">
                <label for="DOB">Contact No. :</label>
                {/* <input type="text" className="form-control" id="" /> */}
                <NumberFormat format="+91 (###) ###-####" className="form-control" name="mob" />
              </div>

              <div className="form-group">
                <label for="DOB">Father's Occupation. :</label>
                <input type="text" className="form-control" id="" />
                {/* <NumberFormat format="+91 (###) ###-####" className="form-control" name="mob" /> */}
              </div>
            </div>
          </div>
          <div className="form-group">
            <label style={{ float: "none" }} class="checkbox-inline"><input type="radio" value="" />  Male</label>
            <label style={{ float: "none" }} class="checkbox-inline"><input type="radio" value="" />  Female</label>
            <label style={{ float: "none" }} class="checkbox-inline"><input type="radio" value="" />  Transgender</label>
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