
import React from "react";
import { Steps, Step } from "react-step-builder";
// 
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
// import { Redirect } from "react-router-dom";

const App = (props) => {
  console.log(props)
  return (
    <div className="steps_wrapper">
    {/* {status?<Redirect to='/uploaddoc' />: */}
     
      <Steps>
        <Step title="1st " component={Step1}  />
        <Step title="Login Info" component={Step2} />
        <Step title="Contact Info" component={Step3} />
        {/* <Step title="Upload Document" component={UploadDocument} /> */}
        {/* <Step title="PreView" component={Preview} /> */}
      </Steps>
    {/* } */}
    </div>
  );
};

export default App;
