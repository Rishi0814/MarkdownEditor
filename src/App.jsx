import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { MarkedInput } from "./components/markedInput";
import { MarkedResults } from "./components/markedResults";
import EditorContext from "./editorContext";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  margin-bottom: 1em;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const App = () => {
  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText,
  };
  return (
    <EditorContext.Provider value={contextValue}>
      <AppContainer>
        <Title>Markdown Editor</Title>
        <EditorContainer>
          <MarkedInput />
          <MarkedResults />
        </EditorContainer>
      </AppContainer>
    </EditorContext.Provider>
  );
};

export default App;
