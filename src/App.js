import React, { useMemo, useState } from "react";
import "./App.scss";

import WizardWrapper from "components/wizard/WizardWrapper";
import WizardHeader from "components/wizard/WizardHeader";

const App = () => {
  const [activeStep, setActiveStep] = useState(1);
  const steps = useMemo(
    () => ["information", "passwordCreation", "feedback"],
    []
  );

  return (
    <div className="app">
      <header className="app__header">
        <WizardHeader steps={steps} activeStep={activeStep} />
      </header>
      <main className="app__content">
        <WizardWrapper activeStep={activeStep} setActiveStep={setActiveStep} />
      </main>
    </div>
  );
};

export default App;
