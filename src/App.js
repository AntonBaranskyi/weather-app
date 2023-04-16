import Main from "./components/Main/Main";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
function App() {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
}

export default App;
