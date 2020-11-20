import React, { useState, useEffect } from 'react';
import AdminHeader from './AdminHeader';
import Links from './Links';
import DataTables from './DataTables';
import Table from './Table';
import BootTab from './BootTab';
import Charts from './Charts';
import Staff from './Staff/Staff';
import Student from './Student/Student';
import Course from './course/Course';
import Downloads from './downloads/Downloads';

const TableData = {
  tHeader: ['Name', 'RollNumber', 'Contact', 'class', 'email'],
  tData: [
    {
      name: 'sanjiv',
      roll: 'TNM000252',
      contact: '7845123669',
      class: '12th',
      email: 'ksanjiv0005@gmail.com',
    },
    {
      name: 'ksanjiv',
      roll: 'TNM010252',
      contact: '7849123669',
      class: '12th',
      email: 'ksanjiv005@gmail.com',
    },
  ],
};

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
            {/* <Table tableData={TableData} /> */}
            {/* <BootTab /> */}
          </div>
        </div>
        <div id="mstudents" className="tab-pane fade">
          <Student />
        </div>
        <div id="mstaff" className="tab-pane fade">
          <Staff />
        </div>
        <div id="mcourse" className="tab-pane fade">
          <Course />
        </div>
        <div id="mdownloads" className="tab-pane fade">
          <Downloads />
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
