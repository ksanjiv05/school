import React from 'react';
import Table from '../Table';
import AddStaff from './AddStaff';

const Staff = () => {
  return (
    <div>
      <div className="topAdminHeader" style={{ height: 'auto' }}>
        <AddStaff />
      </div>
      <div className="bottomAdminHeader">{/* <Table /> */}</div>
    </div>
  );
};

export default Staff;
