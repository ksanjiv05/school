import React from 'react';
import Result from './Result';

const Download = () => {
  return (
    <div className="download">
      <ul className="nav nav-tabs">
        <li className="active">
          <a data-toggle="tab" href="#prospectus">
            Prospectus
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#assignments">
            Assignments
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#question">
            Question Paper
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#result">
            Result
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#ticket">
            Hall Ticket
          </a>
        </li>
      </ul>

      <div className="tab-content tab-content-custom">
        <div id="prospectus" className="tab-pane fade in active">
          <h3>Prospectus</h3>
          <p>Some content.</p>
        </div>
        <div id="assignments" className="tab-pane fade">
          <h3>Assignments</h3>
          <p>Some content in menu 1.</p>
        </div>
        <div id="question" className="tab-pane fade">
          <h3>Question</h3>
          <p>Some content in menu 2.</p>
        </div>
        <div id="result" className="tab-pane fade">
          <h3>Result</h3>
          <Result />
        </div>
        <div id="ticket" className="tab-pane fade">
          <h3>Ticket</h3>
          <p>Some content in menu 2.</p>
        </div>
      </div>
    </div>
  );
};

export default Download;
