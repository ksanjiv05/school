import React, { useState } from "react";
import AdminHeader from "./AdminHeader";
import Links from "./Links";
import DataTables from "./DataTables";
import Table from "./Table";
import BootTab from "./BootTab";
const Admin = () => {
  const [logout, setLogout] = useState(false);
  const handelClick = () => {
    setLogout(!logout);
    console.log("clicked");
  };
  return (
    <div style={{ height: "100%" }}>
      <div className="row" style={{ height: "100%" }}>
        {/* <AdminHeader /> */}
        <div
          className="col-sm-2  "
          style={{ height: "100%", padding: 0 ,backgroundColor: "#3f939e"}}>
          <Links />
        </div>
        <div className="col-sm-10 admindash" style={{ height: "100%" }}>
          <div className="topAdminHeader">
            <AdminHeader />
            <div className="leftAdminHeader">
              <div className="adminProfile" onClick={() => handelClick()}>
                <img src={require('../../static/pro.jpg')} width={100} height={100} />
              </div>
              {logout ? (
                <div className="logout">
                  {/* <Button
                    icon="camera"
                    mode="contained"
                    onPress={() => console.log("Pressed")}>
                    Press me
                  </Button> */}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="bottomAdminHeader">
            {/* <DataTables /> */}
            <Table />
            {/* <BootTab /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
