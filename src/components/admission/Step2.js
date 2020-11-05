import React from "react";
import NumberFormat from "react-number-format";
function Step2(props) {
  return (
    <div>
      <div className="step-progress">
        <h1>
          <span class="label label-info">2</span>
        </h1>
      </div>
      <div className="login admission">
        <form>
          <div class="form-group">
            <label for="name">Address :</label>
            <textarea
              name="address"
              className="form-control"
              id="add"
              rows="5"
              placeholder="Enter your address.."
              value={props.getState("address")}
              onChange={props.handleChange}></textarea>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div class="form-group">
                <label for="city">City :</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  value={props.getState("city")}
                  onChange={props.handleChange}
                  placeholder="City Name"
                />
              </div>
              <div className="form-group">
                <label for="state">State :</label>
                <input
                  type="text"
                  className="form-control"
                  name="state"
                  value={props.getState("state")}
                  onChange={props.handleChange}
                  placeholder="State Name"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div class="form-group">
                <label for="dist">Dist :</label>
                <input
                  type="text"
                  name="dist"
                  value={props.getState("dist")}
                  onChange={props.handleChange}
                  className="form-control"
                  placeholder="City Name"
                />
              </div>

              <div className="form-group">
                <label for="zip">Zip code . :</label>
                <NumberFormat
                  format="######"
                  className="form-control"
                  value={props.getState("zip")}
                  onChange={props.handleChange}
                  name="zip"
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            {props.step.hasPrev() && (
              <button className="next prev" onClick={props.prev}>
                Previous
              </button>
            )}

            {props.step.hasNext() && (
              <button className="next" onClick={props.next}>
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Step2;
