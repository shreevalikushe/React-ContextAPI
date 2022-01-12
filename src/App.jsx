import { useContext } from "react";
import styled from "styled-components";
import { Body } from "./Components/Body";
import { Header } from "./Components/Header";
import { ThemeContext } from "./Context/ThemeContext";

export default function App() {
  const { darkMode } = useContext(ThemeContext);
  const BodyLayout = styled.body`
    background-color: ${darkMode === true ? "#6867AC" : "#CE7BB0"};
    color: ${darkMode === true ? "#CE7BB0" : "#6867AC"};
    padding: 10px;
    margin: 0px;
    width: 100%;
  `;
  return (
    <BodyLayout>
      <Header />
      <Body />
    </BodyLayout>
  );
}
