import React from "react";
import Card from "../../util/Card";

function AdminHeader(props) {
  return (
    <div className="adminHeader">
      <Card title="Total Students" value="500" />
      <Card title="Total Staff" value="50" />
      <Card title="Total Collection" value="500000" />
    </div>
  );
}

export default AdminHeader;
