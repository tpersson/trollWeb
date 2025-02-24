import React, { lazy, useState, useCallback } from "react";
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import styled from "styled-components";
import { msurvey } from "./survey_troll";
import ResultsPage from "./ResultsPage";
import { themeJson } from "./theme";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  
  img {
    max-width: 200px;
    height: auto;
  }
`;

const TrollTest = () => {
  const [surveyResults, setSurveyResults] = useState(null);

  // Grab the 'token' query param from the URL, if present
  const token = new URLSearchParams(window.location.search).get("token");

  // Create and style the survey
  const survey = new Model(msurvey);
  // Apply theme safely
  if (themeJson) {
    try {
      survey.applyTheme(themeJson);
    } catch (error) {
      console.error('Error applying theme:', error);
    }
  }

  // When the survey completes, store the results in state
  const handleComplete = useCallback((sender) => {
    setSurveyResults(sender.data);
  }, []);
  survey.onComplete.add(handleComplete);

  // If there's a token param, show results directly
  if (token) {
    return (
      <Container>
        <ScrollToTop />
        <ResultsPage results={token} />
      </Container>
    );
  }

  // Display the survey results if completed
  if (surveyResults) {
    return (
      <Container>
        <ScrollToTop />
        <ResultsPage results={surveyResults} />
      </Container>
    );
  }

  // Otherwise, render the survey inside your Container layout
  return (
    <Container>
      <ScrollToTop />
      <LogoContainer>
        <img src="/img/trolls/trollLogo.png" alt="Troll Logo" />
      </LogoContainer>
      <h1>Troll Investment Test</h1>
      <p>Welcome to the troll investment style test!</p>
      <Survey model={survey} />
    </Container>
  );
};

export default TrollTest;