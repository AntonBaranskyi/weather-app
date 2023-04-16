import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  width: 400px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background: #fff;
  justify-content: center;
  flex-direction: column;
`;

export const MainTitle = styled.h2`
  font-family: "Courier New", Courier, monospace;
  font-size: 24px;
  line-height: normal;
  color: #000;
  text-align: center;
  padding-bottom: 15px;
`;

export const MainPhoto = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  padding-bottom: 25px;
`;

export const CityTitle = styled.h3`
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  line-height: normal;
  color: #000;
  text-align: center;
  padding-bottom: 20px;
`;

export const MainInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #f2f2f2;
  font-size: 16px;
  color: #333;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 25px;
`;

export const MainButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: #008080;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  width: 100px;
  margin: 0 auto;
  margin-bottom: 30px;

  &:hover {
    background-color: #006666;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;
