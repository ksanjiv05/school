import React, { useState,useContext } from "react";
import axios from 'axios';

function UploadDocument() {
  const [profile, setProfile] = useState("");
  const [markSheet, setMarkSheet] = useState("")
  const [signature, setSignature] = useState("")

  const uploadFiles=(ev)=>{
    ev.preventDefault();
    const formData = new FormData()
    formData.append('profile', profile)
    formData.append('markSheet', markSheet)
    formData.append('signature', signature)
    axios.post("http://localhost:3000/api/uploads?email="+sessionStorage.getItem('email'), formData, {
    }).then(res => {
        console.log(res)
        
    })
  }

  return (
   
    
    <div>
      {/* <div>
        <img src={fileurl} width="400px" height="200px" />
      </div> */}
      
      <div>
        <div className="step-progress">
          <h1>
            <span class="label label-info">4</span>
          </h1>
        </div>
        <div className="login admission">
          <form>
            <div class="form-group">
              <label for="customFile">Profile :</label>
              <input
                type="file"
                class="custom-file-input form-control input-file"
                name="profile"
                onChange={ev=>setProfile(ev.target.files[0])}
                // value={props.getState("profile")}
                // onChange={(ev) =>
                //   props.setState(
                //     "profile",
                //     URL.createObjectURL(ev.target.files[0])
                //   )
                // }

                // onChange={onFileChange}
              />
            </div>

            <div class="form-group">
              <label for="customFile">Signature :</label>
              <input
                type="file"
                class="custom-file-input form-control input-file"
                name="signature"
                onChange={ev=>setSignature(ev.target.files[0])}
                // value={props.getState("signature")}
                // onChange={props.handleChange}
                // onChange={(ev) =>
                //   props.setState(
                //     "signature",
                //     URL.createObjectURL(ev.target.files[0])
                //   )
                // }
              />
            </div>
            <div class="form-group">
              <label for="customFile">Marksheet :</label>
              <input
                type="file"
                class="custom-file-input form-control input-file"
                name="marksheet"
                onChange={ev=>setMarkSheet(ev.target.files[0])}
                // value={props.getState("marksheet")}
                // onChange={props.handleChange}
              />
            </div>

            <div className="form-group">
            <button className="next"  onClick={ev=>uploadFiles(ev)}>
                  Upload Document
              </button>
              {/* {props.step.hasPrev() && (
                <button className="next prev" onClick={props.prev}>
                  Previous
                </button>
              )}
              {props.step.hasNext() && (
                
              )} */}
              {/* {
                <button
                  data-testid="last-next"
                  onClick={props.next}
                  style={{ color: "#6f7275" }}
                  className="next"
                  disabled={props.step.isLast()}
                >
                  Next
				</button>
              } */}
            </div>
          </form>
        </div>
      </div>
    </div>
   
  );
}

export default UploadDocument;

// 91601568 9378 4636
