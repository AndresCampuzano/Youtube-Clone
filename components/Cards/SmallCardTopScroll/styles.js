import styled from "styled-components"

import { Variables } from "../../../styles/Variables"

export const _Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  padding: 0 12px;
  height: 30px;
  border: 1px solid ${Variables.colorBorderSmallCardTopScroll};
  border-radius: 50px;
  background-color: ${Variables.colorGrayDark};
`
