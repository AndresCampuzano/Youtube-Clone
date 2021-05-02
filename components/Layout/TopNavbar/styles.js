import styled from "styled-components"
import Image from "next/image"

import { Variables } from "../../../styles/Variables"

export const _Container = styled.header`
  position: fixed;
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

export const _CenterContainer = styled.div``

export const _RightIconsContainer = styled.div`
  display: flex;
  align-items: center;

  & svg {
    margin-left: 8px;
    padding: 8px;

    & :last-of-type {
      margin-right: 16px;
    }
  }
`

export const StyledImage = styled(Image)`
  border-radius: 50%;
`
