import React from "react";
import styled from "styled-components";

const Map = styled.section`
  background-color: #dbdbdb;
  position: relative;
  z-index: 10;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  padding-top: 10rem;
  align-items: center;
`;

export default function ExampleMap() {
  return <Map>insert map here</Map>;
}
