import React from 'react';

const Question = () => {
  return (
    <div>
      <div>
        <fieldset>
          <legend style={{ color: 'white' }}>BCA-SEM-1</legend>
          <ul itemType="square">
            <li
              onClick={() =>
                window.open('http://localhost:3001/uploads/test2.pdf', '_blank')
              }
              className="download-link"
            >
              MSE-66
            </li>
            <li>q1</li>
            <li>q1</li>
            <li>q1</li>
          </ul>
        </fieldset>
        <fieldset>
          <legend style={{ color: 'white' }}>BCA-SEM-2</legend>
          <ul>
            <li>q1</li>
            <li>q1</li>
            <li>q1</li>
            <li>q1</li>
          </ul>
        </fieldset>
      </div>
    </div>
  );
};

export default Question;
