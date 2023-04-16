import Main from "./components/Main/Main";
import styled from "styled-components";
import CityForecast from "./components/CityForecast/CityForecast";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
function App() {
  const { status } = useSelector((state) => state.weather);


  return <Wrapper>{status === "succes" ? <CityForecast /> : <Main />}</Wrapper>;
}

export default App;
