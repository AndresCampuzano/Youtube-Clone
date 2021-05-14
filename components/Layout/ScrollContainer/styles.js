import styled from "styled-components"

import { Variables } from "../../../styles/Variables"

export const _Container = styled.div`
  position: fixed;
  z-index: 1;
  top: 56px;
  right: 0;
  left: 240px;
  overflow-x: auto;
  display: flex;
  align-items: center;
  padding: 0 35px;
  height: 56px;
  border-top: 1px solid ${Variables.colorGrayDark};
  border-bottom: 1px solid ${Variables.colorGrayDark};
  background-color: ${Variables.colorNavTrans};
  user-select: none;
  white-space: nowrap;

  & svg {
    cursor: pointer;
  }

  & ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1328px) {
    left: 72px;
  }

  @media (max-width: 807px) {
    left: 0px;
  }
`

export const _LeftArrow = styled.div`
  position: fixed;
  top: 56px;
  left: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 56px;
  background: linear-gradient(
    to right,
    rgba(32, 32, 32, 0.904) 70%,
    rgba(0, 0, 0, 0) 80%
  );

  & svg {
    margin-left: -25px;
  }

  @media (max-width: 1328px) {
    left: 72px;
  }

  @media (max-width: 807px) {
    left: 0px;
  }
`

export const _RightArrow = styled.div`
  position: fixed;
  top: 56px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 56px;
  background: linear-gradient(
    to left,
    rgba(32, 32, 32, 0.904) 70%,
    rgba(0, 0, 0, 0) 80%
  );

  & svg {
    margin-right: -25px;
  }
`
