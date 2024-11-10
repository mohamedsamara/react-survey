import "./App.css";

import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";

import json from "./data/survey.json";
import { themeJson } from "./theme";

const onComplete = (survey: { data: unknown }) => {
  console.log("Survey complete! Results: " + JSON.stringify(survey.data));
};

const App = () => {
  const survey = new Model(json);
  survey.applyTheme(themeJson);

  return (
    <main>
      <Survey model={survey} onComplete={onComplete} />
    </main>
  );
};

export default App;
