import React from "react";
import Util from "../../util/Util";

export const Preview = (props) => {
  console.log("--", props);
  return (
    <div className="login preview">
      <div className="previewHeader">
        <center>
          <div>
            <img src={require("../../static/logo192.png")} className="logo" />
          </div>
          <div>
            <h2 style={Util.HeaderFont}>
              <u>The School Of Mathmatis</u>
            </h2>
            <p>abc delhi-110008</p>
          </div>
        </center>
      </div>
      <div style={{ height: "210px" }}>
        <div className="leftPreview leftPreviewAdd"></div>
        <div className="leftPreview profile">
          <img src={props.state.profile} width="400px" height="200px" />
        </div>
      </div>
      <div style={{ height: "210px" }}>
        <div className="leftPreview"></div>
        <div className=" leftPreview rightPreview"></div>
      </div>
      <div style={{ height: "210px" }}>
        <div className="leftPreview"></div>
        <div className=" leftPreview rightPreview"></div>
      </div>
      <div style={{ height: "210px" }}>
        <div className="leftPreview"></div>
        <div className=" leftPreview rightPreview">hh</div>
      </div>
    </div>
  );
};
