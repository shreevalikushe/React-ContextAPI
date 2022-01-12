import styled from "styled-components";

export function Cards({ name, designation, level }) {
  const MinDiv = styled.div`
    border: 1px solid #ffbcd1;
    padding: 15px;
    margin: 1rem;
  `;
  return (
    <MinDiv>
      <h4 style={{ padding: "0px", margin: "0px" }}> {name}</h4>
      <p style={{ padding: "0px", margin: "0px" }}>
        {" "}
        Designation: {designation}
      </p>
      <i>Professional Level: {level}</i>
    </MinDiv>
  );
}
