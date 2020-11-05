import React from "react";
import NumberFormat from 'react-number-format';
import axios from 'axios'
function Step3(props) {
  const handelClick=(ev)=>{
    ev.preventDefault();
    props.state.email=window.sessionStorage.getItem("email");
    console.log("values of step 3", props.state)
    axios.post('http://localhost:3001/api/admission',props.state)
  }
  
  return (
    <div >
      <div className="step-progress"><h1><span class="label label-info">3</span></h1></div>
      <div className="login admission">

        <form>
          <div class="form-group">
            <label for="prevedu">Discription of Previous Education :</label>
            <textarea name="prevedu" className="form-control" rows="5" placeholder="Enter your  previous education details.." value={props.getState('prevedu')} onChange={props.handleChange}></textarea>
          </div>
          <div className="row">
            <div className="col-md-6">


              <div class="form-group">
                <label for="school">School/Institute :</label>
                <input type="text" name="school" className="form-control" value={props.getState('school')} onChange={props.handleChange} placeholder="school" />
              </div>
              <div className="form-group">
                <label for="marks">Total Marks :</label>
                <input type="text" className="form-control" name="marks" value={props.getState('marks')} onChange={props.handleChange} placeholder="Marks" />
              </div>
            </div>


            <div className="col-md-6">


              <div class="form-group">
                <label for="qulification">Qulification :</label>
                <input type="text" name="qulification" value={props.getState('qulification')} onChange={props.handleChange} className="form-control" placeholder="Higer qulification" />
              </div>

              <div className="form-group">
                <label for="percentage">Persentage . :</label>
                <input type="text" name="percentage" value={props.getState('percentage')} onChange={props.handleChange} className="form-control" placeholder="percentage" />
              </div>
            </div>
          </div>

          {/* <label className="custom-file-label" for="customFile" >Choose file</label> */}
          {/* <input type="file" className="custom-file-input" name="profile" value={props.getState('prevedu')} onChange={props.handleChange} id="customFile" /> */}


          <div className="form-group">
            {props.step.hasPrev() && <button className="next prev" onClick={props.prev}>Previous</button>}

           <button className="next" onClick={ev=>handelClick(ev)}>Save</button>
            
          </div>
        </form>

      </div>
    </div>



  );
}

export default Step3;
