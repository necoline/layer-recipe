import React from "react";
import styled from "styled-components";

import { DevseedUiThemeProvider } from "@devseed-ui/theme-provider";
import Layers from "./Layers";
import ExampleMap from "./ExampleMap";

const Page = styled.div`
  display: flex;
`;

const PageHeader = styled.h1`
  display: flex;
  justify-content: center;
`;

export default function App() {
  return (
    <DevseedUiThemeProvider>
      <PageHeader>Layer Recipe</PageHeader>
      <Page>
        <Layers />
        <ExampleMap />
      </Page>
    </DevseedUiThemeProvider>
  );
}
