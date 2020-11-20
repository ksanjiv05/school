import React from 'react';

const CustomModle = (props) => {
  return (
    <div>
      <div id={props.modelId} className="modal fade" role="dialog">
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
                {props.headerTitle}
              </h4>
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={props.handelClick}
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
      </div>
    </div>
  );
};

export default CustomModle;
