import React, { useState } from 'react';
// import DisplayDocument from './DisplayDocument';
import ViewPdf from './ViewPdf';

const BooksCard = (props) => {
  // handelRead = () => {
  //   pdfUrl;
  // };
  const [pdfUrl, setPdfUrl] = useState('');
  const handlePdfUrl = () => {
    setPdfUrl(props.data.pdfUrl);
    console.log(pdfUrl);
  };
  const { imgUrl, Author, publication, edition, year, title } = props.data;
  console.log(props);
  return (
    <div>
      <div className="card">
        <img
          src={imgUrl}
          className="card-img-top"
          style={{ width: '100%;' }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <b>{Author}</b>
            <br />
            <i>{publication}</i> ({edition})
          </p>
          {/* <button className="btn btn-primary">Read this Book</button> */}
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
            Read this Book
          </button>
        </div>
      </div>
      {/* <div className="pdfViewer">
        <div
          className="modal fade"
          id="exampleModalScrollable"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalScrollableTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title"
                  style={{ display: 'contents' }}
                  id="exampleModalScrollableTitle"
                >
                  eBook
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {console.log('+++++++++++++++++', pdfUrl)}
                {pdfUrl == '' ? '' : <ViewPdf pdfUrl={pdfUrl} />}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BooksCard;
