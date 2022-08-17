import React from "react";
import "./App.scss";

import WizardWrapper from "components/Wizard/WizardWrapper";

const App = () => {
  return (
    <main className="app d-flex flex-column">
      <div className="app__top-half"></div>
      <div className="app__bottom-half"></div>
      <div className="app__content position-absolute">
        <WizardWrapper />
      </div>
    </main>
  );
};

export default App;
