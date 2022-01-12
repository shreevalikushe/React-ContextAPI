import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../Context/ThemeContext";

export function Header() {
  const { toggleDarkMode } = useContext(ThemeContext);
  const Button = styled.button`
    background-color: #d9534f;
    color: #ffad60;
    border: none;
    border-radius: 5px;
  `;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        textAlign: "left",
        // gap: "5rem",
        margin: "0px",
        marginRight: "120px",
        padding: "0px"
      }}
    >
      <h3 style={{ margin: "0px", padding: "0px", marginRight: "120px" }}>
        My Dashboard
      </h3>
      Dark Mode
      <Button onClick={toggleDarkMode} style={{ marginLeft: "5px" }}>
        Toggle
      </Button>
    </div>
  );
}
