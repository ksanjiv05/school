

import React from "react";
import { Steps, Step } from "react-step-builder";
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const App = () => {
  return (
    <div className="steps_wrapper">

      <Steps>
        <Step title="1st " component={Step1} />
        <Step title="Login Info" component={Step2} />
        <Step title="Contact Info" component={Step3} />
      </Steps>
    </div>
  );
};

export default App;
