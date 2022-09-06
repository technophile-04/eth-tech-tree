import styled from "styled-components";
import Tree from "./components/Tree.jsx";
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

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Title>ETH Tech tree</Title>
      <Tree theme={{ direction: "horizontal" }} />
      {/* <Tree theme={{ direction: "vertical" }} /> */}
    </Container>
  );
};

export default App;
