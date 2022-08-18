import React, { Suspense, useMemo, useState } from "react";
import "./App.scss";

import WizardWrapper from "components/Wizard/WizardWrapper";
import WizardHeader from "components/Wizard/WizardHeader";
import Spinner from "components/Common/Spinner";

const App = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = useMemo(
    () => ["information", "passwordCreation", "feedback"],
    []
  );

  return (
    <Suspense fallback={<Spinner open={true} />}>
      <div className="app">
        <header className="app__header">
          <WizardHeader steps={steps} activeStep={activeStep} />
        </header>
        <main className="app__content">
          <WizardWrapper
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </main>
      </div>
    </Suspense>
  );
};

export default App;
