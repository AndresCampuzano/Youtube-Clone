import styled from "styled-components"

import { Variables } from "../../../styles/Variables"

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 24px;
  height: 40px;

  & :hover {
    background-color: ${Variables.colorGrayDark};
    cursor: pointer;
  }

  & svg {
    margin-right: 24px;
  }
`
