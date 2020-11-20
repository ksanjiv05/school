import React from 'react';

const HallTicket = () => {
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
          type="date"
          class="form-control"
          placeholder="Reporting time"
          // onChange={(ev) => handelChange(ev)}
        />
      </div>
      <div className="col-md-2">
        <input
          type="date"
          class="form-control"
          placeholder="Exam time"
          // onChange={(ev) => handelChange(ev)}
        />
      </div>
      <div className="col-md-3">
        <select
          className="form-control"
          placeholder="time"
          // onChange={(ev) => handelChange(ev)}
        >
          <option>1 Hour</option>
          <option>2 Hour</option>
          <option>3 Hour</option>
          <option>4 Hour</option>
        </select>
      </div>
      <div className="col-md-2">
        <input
          type="button"
          value="Genrate Hall Ticket"
          class="form-control btn-success"
          //disabled
        />
      </div>
    </div>
  );
};

export default HallTicket;
