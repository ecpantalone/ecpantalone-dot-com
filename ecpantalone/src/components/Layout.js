import React from "react";
import styled from "styled-components";

import { ResumeMap } from ".";

const Header = styled("header")`
  width: 100vw;
  height: 80px;
  border-bottom: 2px solid #222;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = () => {
  return (
    <>
      <main>
        <ResumeMap />
      </main>
    </>
  );
};

export default Layout;
