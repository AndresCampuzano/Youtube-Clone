import styled from "styled-components"
import Image from "next/image"

import { Variables } from "../../../styles/Variables"

export const _Container = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  height: 56px;
  background-color: ${Variables.colorNavTrans};
`
export const _PaddingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 100%;

  & svg,
  img:hover {
    cursor: pointer;
  }
`

export const _LeftIconsContainer = styled.div`
  display: flex;
  align-items: center;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    padding: 8px;
  }
`

// export const _CenterContainer = styled.div``

export const _RightIconsContainer = styled.div`
  display: flex;
  align-items: center;

  & svg {
    margin-left: 5px;
    padding: 8px;
  }
`

export const _HideSmallScreens = styled.div`
  display: flex;
  align-items: center;

  & svg {
    & :first-of-type {
      @media (max-width: 466px) {
        display: none;
      }
    }
  }

  @media (min-width: 657px) {
    display: none;
  }
`

export const _HideBellSmallScreens = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;

  @media (max-width: 466px) {
    display: none;
  }
`

export const _StyledImage = styled(Image)`
  border-radius: 50%;
`
