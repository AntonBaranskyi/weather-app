import Main from "./components/Main/Main";
import styled from "styled-components";
import CityForecast from "./components/CityForecast/CityForecast";
import { useSelector } from "react-redux";
import { MainButton } from "./components/Main/MainStyled";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RefreshButton = styled(MainButton)`
  display: block;
  margin: 0 auto;
  margin-top: 25px;
`;

function App() {
  const { status } = useSelector((state) => state.weather);

  return (
    <Wrapper>
      {status === "succes" ? (
        <div>
          <CityForecast />
          <RefreshButton onClick={() => window.location.reload()}>
            Refresh
          </RefreshButton>
        </div>
      ) : (
        <Main />
      )}
    </Wrapper>
  );
}

export default App;
