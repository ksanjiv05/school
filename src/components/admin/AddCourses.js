import React from "react";

export const AddCourses = () => {
  return (
    <div className="login">
      <div class="form-group">
        <label for="ccode">Course Code :</label>
        <input
          type="text"
          className="form-control"
          name="ccode"
          onChange={props.handleChange}
          placeholder="Enter course code"
        />
      </div>
      <div className="form-group">
        <label for="ctitle">Course title :</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Course title"
        />
      </div>
      <div class="form-group">
        <label for="stream">Select Stream :</label>
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
