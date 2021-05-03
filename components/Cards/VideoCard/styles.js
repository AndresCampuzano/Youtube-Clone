import styled from "styled-components"
import Image from "next/image"

import { Variables } from "../../../styles/Variables"

export const _Container = styled.article`
  & :hover {
    cursor: pointer;
  }
`

export const _StyledImageMain = styled(Image)``

export const _ContentContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

export const _DivChannelImage = styled.div`
  margin-right: 12px;
  /* border: 1px solid red; */
`

export const _StyledImageChannel = styled(Image)`
  border-radius: 50%;
`

export const _DivText = styled.div`
  /* border: 1px solid green; */

  & h2 {
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
  }

  & h3 {
    margin-top: 3px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: ${Variables.colorFontGrayIdle};
  }

  & p {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: ${Variables.colorFontGrayIdle};
  }
`

export const _DivMoreOptions = styled.div`
  margin-left: 12px;
  /* border: 1px solid purple; */
`
