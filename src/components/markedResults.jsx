import React, { useContext } from "react";
import styled from "styled-components";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import editorContext from "../editorContext";

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
  border-right: 1.5px solid #000;
  font-family: "Lato", sans-serif;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid #000;
`;

const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
`;

export function MarkedResults(props) {
  const { markdownText } = useContext(editorContext);

  return (
    <Container>
      <Title>Converted Text</Title>
      <ResultArea>
        <ReactMarkdown children={markdownText} />
      </ResultArea>
    </Container>
  );
}
