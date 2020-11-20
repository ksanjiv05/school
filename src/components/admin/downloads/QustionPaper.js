import React from 'react';

const QustionPaper = () => {
  return (
    <div className="row">
      <div className="col-md-2">
        {/* <label for="sel1">Select Course:</label> */}
        <select
          className="form-control"
          placeholder="class"
          // onChange={(ev) => handelChange(ev)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
      <div className="col-md-3">
        <input
          type="text"
          class="form-control"
          placeholder="title"
          // onChange={(ev) => handelChange(ev)}
        />
      </div>
      <div className="col-md-2">
        <input
          type="text"
          class="form-control"
          placeholder="Session"
          // onChange={(ev) => handelChange(ev)}
        />
      </div>
      <div className="col-md-3">
        <input
          type="file"
          class="form-control"
          placeholder="assigment"
          // onChange={(ev) => handelChange(ev)}
        />
      </div>
      <div className="col-md-2">
        <input
          type="button"
          value="Add Assingment"
          class="form-control btn-success"
          //disabled
        />
      </div>
    </div>
  );
};

export default QustionPaper;
