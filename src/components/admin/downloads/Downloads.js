import React from 'react';
import Assingment from './Assingment';
import QustionPaper from './QustionPaper';

const Downloads = () => {
  return (
    <div>
      <div className="topAdminHeader" style={{ height: 'auto' }}>
        <fieldset
          style={{
            margin: '0 2px',
            border: '2px solid #ce069d',
            padding: '.35em .625em .75em',
            borderRadius: '5px',
          }}
        >
          <legend
            style={{
              width: 'auto',
              marginBottom: 0,
              borderBottom: 0,
              color: 'white',
            }}
          >
            Prospact:
          </legend>
          <Assingment />
        </fieldset>
        <fieldset
          style={{
            margin: '0 2px',
            border: '2px solid #ce069d',
            padding: '.35em .625em .75em',
            borderRadius: '5px',
          }}
        >
          <legend style={{ width: 'auto', marginBottom: 0, borderBottom: 0 }}>
            Assingment:
          </legend>
          <Assingment />
        </fieldset>
        <fieldset
          style={{
            margin: '0 2px',
            border: '2px solid #ce069d',
            padding: '.35em .625em .75em',
            borderRadius: '5px',
          }}
        >
          <legend style={{ width: 'auto', marginBottom: 0, borderBottom: 0 }}>
            Qustion Paper:
          </legend>
          <QustionPaper />
        </fieldset>
        <fieldset
          style={{
            margin: '0 2px',
            border: '2px solid #ce069d',
            padding: '.35em .625em .75em',
            borderRadius: '5px',
          }}
        >
          <legend style={{ width: 'auto', marginBottom: 0, borderBottom: 0 }}>
            Sample Paper:
          </legend>
          <Assingment />
        </fieldset>
      </div>

      <div className="bottomAdminHeader">{/* <Table /> */}</div>
    </div>
  );
};

export default Downloads;
