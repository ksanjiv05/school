import React from "react";

const AddTeachears = () => {
  return (
    <div className="login">
      <div class="form-group">
        <label for="tname">Name of Teacher :</label>
        <input
          type="text"
          className="form-control"
          name="tname"
          onChange={props.handleChange}
          placeholder="Enter teacher name"
        />
      </div>
      <div className="form-group">
        <label for="spacelization">Course spacelization :</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Course spacelization"
        />
      </div>
      <div class="form-group">
        <label for="stream">Conatct Number :</label>
        <input
          name="stream"
          type="text"
          className="form-control"
          onChange={props.handleChange}
          placeholder="Enter the conatct no."
        />
      </div>
      <div className="form-group">
        <label for="email">Email :</label>
        <input
          type="text"
          name="email"
          className="form-control"
          onChange={props.handleChange}
          placeholder="Enter the Email"
        />
      </div>
      <div className="form-group">
        <label for="decription">Teacher's Decription :</label>
        <textarea
          className="form-control"
          rows="5"
          placeholder="Enter the details decription  "></textarea>
      </div>
    </div>
  );
};

export default AddTeachears;
