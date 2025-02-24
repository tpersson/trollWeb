import { useCallback, useState } from 'react';

import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { msurvey } from "./survey_troll";
import ResultsPage from "./ResultsPage";
import { themeJson } from "./theme";

function App() {
  const [surveyResults, setSurveyResults] = useState(null);
  
  // Get the token from URL
  const token = new URLSearchParams(window.location.search).get('token');

  const survey = new Model(msurvey);
  survey.applyTheme(themeJson);

  const handleComplete = useCallback((sender) => {
    setSurveyResults(sender.data);
  }, []);

  survey.onComplete.add(handleComplete);

  // Display token if present
  if (token) {
    return <ResultsPage results={token} />;
  }

  if (surveyResults) {
    return <ResultsPage results={surveyResults} />;
  }

  return <Survey model={survey} />;
}

export default App;
