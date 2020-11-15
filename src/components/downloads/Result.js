import React from 'react';

const Result = () => {
  const [data, setData] = useState({});
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handelChange = (ev) => {
    const { name, value } = ev.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          {/* <label for="sel1">Select Course:</label> */}
          <select
            className="form-control"
            id="course"
            onChange={(ev) => handelChange(ev)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className="col-md-6">
          <input
            type="text"
            class="form-control"
            id="usr"
            onChange={(ev) => handelChange(ev)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="button"
            value="Get Hall-Ticket"
            class="form-control btn-info"
            disabled
          />
        </div>
      </div>
      {/* <div className="row">
        <div className="col-md-12"></div>
      </div> */}
    </>
  );
};

export default Result;
