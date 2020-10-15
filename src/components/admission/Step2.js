import React from "react";
import NumberFormat from 'react-number-format';
function Step2(props) {
  return (
    <div >
      <div className="step-progress"><h1><span class="label label-info">2</span></h1></div>
      <div className="login admission">

        <form>
          <div class="form-group">
            <label for="name">Address :</label>
            <textarea className="form-control" id="add" rows="5" placeholder="Enter your address.." ></textarea>
          </div>
          <div className="row">
            <div className="col-md-6">


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
            </div>
          </div>

          <div className="form-group">
            {props.step.hasPrev() && <button className="next prev" onClick={props.prev}>Previous</button>}

            {props.step.hasNext() && <button className="next" onClick={props.next}>Next</button>}
          </div>
        </form>

      </div>
    </div>

  );
}

export default Step2;