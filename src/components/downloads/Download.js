import React from 'react';
import Result from './Result';
import ViewPdf from '../library/ViewPdf';
import Assingment from './Assingment';
import Question from './Question';

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
          <h3 className="download-heading">Prospectus</h3>
          <p>Only for test</p>
          {/* <div>
            <ViewPdf
              pdfUrl={
                'http://localhost:3001/uploads/file2-1605505621533-JavaScriptNotesForProfessionals.pdf'
              }
            />

          </div> */}
          <button
            type="button"
            className="btn btn-primary"
            //onClick={handlePdfUrl}
            onClick={() =>
              window.open('http://localhost:3001/uploads/test2.pdf', '_blank')
            }
            data-toggle="modal"
            // data-target="#exampleModalScrollable"
          >
            Read this Prospact
          </button>
        </div>
        <div id="assignments" className="tab-pane fade">
          <h3 className="download-heading">Assignments</h3>
          <Assingment />
        </div>
        <div id="question" className="tab-pane fade">
          <h3 className="download-heading">Question</h3>
          <Question />
        </div>
        <div id="result" className="tab-pane fade">
          <h3 className="download-heading">Result</h3>
          <Result />
        </div>
        <div id="ticket" className="tab-pane fade">
          <h3 className="download-heading">Ticket</h3>
          <p>Some content in menu 2.</p>
        </div>
      </div>
    </div>
  );
};

export default Download;
