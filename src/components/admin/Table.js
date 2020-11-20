import React from 'react';

const Table = (props) => {
  console.log(props);
  const { tData, helper, tHeader } = props;
  console.log(tData, '--', tHeader);
  const clickHandel = () => {
    console.log('clicked');
  };

  const styles = {
    border: 'none',
    backgroundColor: 'transparent',
  };

  return (
    <div>
      {tData == undefined || tData == null ? (
        ''
      ) : (
        <table id="example" className="table table-striped table-bordered">
          <thead>
            <tr>
              {/* <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
            <th>Acation</th> */}
              {tHeader.map((v, i) => (
                <th key={i}>{v}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tData.map((v, i) => (
              <tr key={i}>
                {helper.map((iv, ii) => (
                  <td>{v[iv]}</td>
                ))}
              </tr>
            ))}
            {/* <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <button style={styles} onClick={() => clickHandel}>
                del
              </button>
            </td>
          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <button style={styles} onClick={() => clickHandel}>
                <span class="glyphicon glyphicon-trash text-danger"></span>
              </button>
              <button style={styles} onClick={() => clickHandel}>
                <span class="glyphicon glyphicon-eye-open text-danger"></span>
              </button>
            </td>
          </tr> */}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
