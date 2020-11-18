import React, { useState, useEffect } from 'react';
import AdminHeader from './AdminHeader';
import Links from './Links';
import DataTables from './DataTables';
import Table from './Table';
import BootTab from './BootTab';
import Charts from './Charts';
const Admin = (props) => {
  const [logout, setLogout] = useState(false);
  useEffect(() => {
    props.handelHeader();
  });
  const handelClick = () => {
    setLogout(!logout);
    console.log('clicked');
  };
  return (
    //   <div style={{ height: "100%" }}>
    //     <div className="row" style={{ height: "100%" }}>
    //       {/* <AdminHeader /> */}
    //       <div
    //         className="col-sm-2  "
    //         style={{ height: "100%", padding: 0 ,backgroundColor: "#3f939e"}}>
    //         <Links />
    //       </div>
    //       <div className="col-sm-10 admindash" style={{ height: "100%" }}>
    //         <div className="topAdminHeader">
    //           <AdminHeader />
    //           <div className="leftAdminHeader">
    //             <div className="adminProfile" onClick={() => handelClick()}>
    //               <img src={require('../../static/pro.jpg')} width={100} height={100} />
    //             </div>
    //             {logout ? (
    //               <div className="logout">
    //                 {/* <Button
    //                   icon="camera"
    //                   mode="contained"
    //                   onPress={() => console.log("Pressed")}>
    //                   Press me
    //                 </Button> */}
    //               </div>
    //             ) : (
    //               ""
    //             )}
    //           </div>
    //         </div>
    //         <div className="bottomAdminHeader">
    //           {/* <DataTables /> */}
    //           <Table />
    //           {/* <BootTab /> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );

    /////////////////////////////////////////////////////

    <div className="download" style={{ height: '100%' }}>
      <ul className="nav nav-tabs">
        <li className="active">
          <a data-toggle="tab" href="#home">
            Home
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#mstaff">
            Manage Staff
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#mstudents">
            Manage Students
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#mcourse">
            Manage Courses
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#mdownloads">
            Manage downloads
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#mlibrary">
            Manage Library
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#setting">
            Setting
          </a>
        </li>
      </ul>

      <div className="tab-content tab-content-custom">
        <div id="home" className="tab-pane fade in active">
          <div className="topAdminHeader">
            <AdminHeader />
          </div>
          <div className="middleAdminHeader">
            <Charts />
          </div>
          <div className="bottomAdminHeader">
            {/* <DataTables /> */}
            <Table />
            {/* <BootTab /> */}
          </div>
        </div>
        <div id="mstudents" className="tab-pane fade">
          <h3>students</h3>
          <p>Some content in menu 1.</p>
        </div>
        <div id="mstaff" className="tab-pane fade">
          <h3>Staff</h3>
          <p>Some content in menu 2.</p>
        </div>
        <div id="mcourse" className="tab-pane fade">
          <h3>course</h3>
          {/* <Result /> */}
        </div>
        <div id="mdownloads" className="tab-pane fade">
          <h3>downloads</h3>
          <p>Some content in menu 2.</p>
        </div>
        <div id="mlibrary" className="tab-pane fade">
          <h3>Library</h3>
          <p>Some content in menu 2.</p>
        </div>
        <div id="setting" className="tab-pane fade">
          <h3>Setting</h3>
          <p>Some content in menu 2.</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
