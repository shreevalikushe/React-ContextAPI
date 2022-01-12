import styled from "styled-components";
import { Cards } from "./Cards";

export function Body() {
  const Div = styled.div`
    height: 500px;
    width: 400px;
    margin: 1rem;
    border: 2px solid #ffbcd1;
    padding: 1rem;
  `;

  return (
    <Div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "150px",
          margin: "15px"
        }}
      >
        <p>Active users</p>
        <p>For August 2019</p>
      </div>
      <Cards name={"Nrupul Dev"} designation={"CTO"} level={10} />
      <Cards name={"Albert Sebastian"} designation={"FSD"} level={15} />
      <Cards name={"Aman Vats"} designation={"DSA Head"} level={15} />
      <Cards name={"Vivek Tiwari"} designation={"Operations"} level={18} />
    </Div>
  );
}
