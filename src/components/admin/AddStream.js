import React from 'react';

export const AddStream = () => {
  return (
    <div className="login">
      <div class="form-group">
        <label for="scode">Stream Code :</label>
        <input
          type="text"
          className="form-control"
          name="ccode"
          onChange={props.handleChange}
          placeholder="Enter course code"
        />
      </div>
      <div className="form-group">
        {/* {/* <label for="stype">Stream type :</label>   acadmic non-acadamic} */}
        <input
          type="text"
          className="form-control"
          placeholder="Enter Course title"
        />
      </div>
      <div class="form-group">
        {/* <label for="stream">Select Stream :</label> acadamic classes 1to 10 non 11 12  */}
        <input
          name="stream"
          type="text"
          className="form-control"
          onChange={props.handleChange}
          placeholder=""
        />
      </div>
      <div className="form-group">
        <label for="bclass">Belong Class :</label>
        <input
          type="text"
          name="bclass"
          className="form-control"
          onChange={props.handleChange}
          placeholder="Mother's Name"
        />
      </div>
    </div>
  );
};
