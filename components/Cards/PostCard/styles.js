import styled from "styled-components"
import Image from "next/image"

import { Variables } from "../../../styles/Variables"

export const _Container = styled.article`
  padding: 16px 24px;
  border: 1px solid #383838;
  background-color: #212121;
  cursor: pointer;
`

export const _DivChannel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  color: ${Variables.colorIconsIdle};

  & p {
    & :first-of-type {
      margin: 0 10px;
    }
  }
`

export const _StyledChannelImage = styled(Image)`
  border-radius: 50%;
`

export const _DivContent = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  & p {
    /* stylelint-disable */
    /* display: -webkit-box;
    overflow: hidden; */
    margin-right: 16px;
    max-width: 58%;
    /* height: 116px;s */
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    /* text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical; */
    /* stylelint-enable */
  }
`

export const _StyledImagePost = styled(Image)`
  border-radius: 5px;
`

export const _DivIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  color: ${Variables.colorIconsIdle};
`

export const _LeftIcons = styled.div`
  display: flex;
  align-items: center;

  & p {
    margin: 0 15px 0 10px;
  }
`

export const _RightIcons = styled.div`
  display: flex;
  align-items: center;

  & div {
    display: flex;
    align-items: center;

    & p {
      margin: 0 15px 0 10px;
    }
  }
`
