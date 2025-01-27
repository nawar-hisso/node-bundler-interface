import React from "react";
import ApiButtons from "./components/ApiButtons";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Bundler APIs
      </h1>
      <ApiButtons />
    </AppContainer>
  );
};

export default App;
