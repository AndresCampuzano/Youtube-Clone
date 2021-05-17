import styled from "styled-components"
import Image from "next/image"

export const _Container = styled.section`
  padding-top: 15px;
  width: 100%;
  height: 260px;
  background-color: #000000;
`

export const _Content = styled.div`
  padding: 24px 32px;

  & h2 {
    overflow: hidden;
    margin-top: 8px;
    margin-bottom: 20px;
    max-width: 460px;
    font-size: 26px;
    /* font-family: "YouTube Sans", "YT Sans", Roboto, Arial, sans-serif; */
    font-weight: 400;
    line-height: 30px;
  }
`

export const _StyledImageMain = styled(Image)`
  /* margin-top: 20px; */
`

export const _DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 36px;
  border: 3px solid white;

  & p {
    font-weight: bold;
  }

  & :hover {
    cursor: pointer;
  }
`
