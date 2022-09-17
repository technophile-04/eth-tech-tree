import styled from "styled-components";
import Tree from "./components/Tree.jsx";
import { challengeData, challengeData1 } from "./data/challengeData.js";
import { GlobalStyle } from "./styles/globalStyles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const TreesContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Title>ETH Tech tree</Title>
      <TreesContainer>
        <Tree theme={{ direction: "vertical" }} challengeData={challengeData1} />
        <Tree theme={{ direction: "horizontal" }} challengeData={challengeData} />
      </TreesContainer>
    </Container>
  );
};

export default App;
