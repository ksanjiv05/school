import React from 'react';
import CustomModle from '../../../util/CustomModle';

const AddStaff = () => {
  const handelClick = () => {
    console.log('nice to add');
  };
  return (
    <div>
      <div className="add-staff" data-toggle="modal" data-target="#staff">
        <center>+</center>
      </div>

      {/* <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button> */}

      {/* <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                style={{ color: 'red' }}
              >
                &times;
              </button>
              <h4 className="modal-title" style={{ color: '#020b38e8' }}>
                Modal Header
              </h4>
            </div>
            <div className="modal-body"> */}
      {/* //body start------------------------------------- */}
      <CustomModle
        modelId="staff"
        headerTitle={'Staff'}
        handelClick={handelClick}
      >
        <div
          className="login"
          style={{
            backgroundColor: '#03393ee6',
            marginTop: 0,
            width: '100%',
          }}
        >
          <div class="form-group">
            <label for="tname">Name of Teacher :</label>
            <input
              type="text"
              className="form-control"
              name="tname"
              // onChange={props.handleChange}
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
              // onChange={props.handleChange}
              placeholder="Enter the conatct no."
            />
          </div>
          <div className="form-group">
            <label for="email">Email :</label>
            <input
              type="text"
              name="email"
              className="form-control"
              // onChange={props.handleChange}
              placeholder="Enter the Email"
            />
          </div>
          <div className="form-group">
            <label for="decription">Teacher's Decription :</label>
            <textarea
              className="form-control"
              rows="5"
              placeholder="Enter the details decription  "
            ></textarea>
          </div>
        </div>
      </CustomModle>
      {/* </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                // data-dismiss="modal"
                onClick={() => console.log('added')}
              >
                Add
              </button>
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AddStaff;
