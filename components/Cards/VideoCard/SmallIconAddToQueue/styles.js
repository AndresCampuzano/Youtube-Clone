import styled from "styled-components"

import { Variables } from "../../../../styles/Variables"

export const _Container = styled.div`
  position: absolute;
  z-index: 1;
  top: 37px;
  right: 5px;
  display: flex;
`

export const _DivIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 2px;
  background-color: ${Variables.colorNavTrans};
`

export const _DivTextContainer = styled.div`
  position: relative;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  height: 28px;
  border-radius: 2px;
  background-color: ${Variables.colorNavTrans};
  animation-name: slidein;
  animation-duration: 0.5s;
  transition-timing-function: ease;

  & p {
    font-weight: 500;
  }

  @keyframes slidein {
    from {
      right: -50px;
    }
    to {
      right: 0;
    }
  }
`
