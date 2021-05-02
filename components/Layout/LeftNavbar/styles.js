import styled from "styled-components"

import { Variables } from "../../../styles/Variables"

export const Container = styled.nav`
  position: fixed;
  top: 56px;
  bottom: 0;
  left: 0;
  overflow: hidden;
  padding: 12px 0;
  width: 240px;
  background-color: ${Variables.colorNav};

  & :hover {
    overflow: auto;
  }

  & hr {
    margin: 12px 0;
    width: 225px;
    border-top: 1px solid ${Variables.colorGrayDark};
  }

  & h3 {
    padding: 8px 24px;
    font-size: 14px;
    font-weight: 500;
    color: ${Variables.colorTextNavbar};
  }
`
