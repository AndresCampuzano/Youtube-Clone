import styled from "styled-components"

import { Variables } from "../../styles/Variables"

export const _Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 35px;

  @media (max-width: 656px) {
    display: none;
  }
`

export const _FormStyles = styled.div`
  display: flex;
  align-items: center;

  & button {
    margin-right: 8px;
    width: 65px;
    height: 32px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    background-color: ${Variables.colorGrayDark};

    & :hover {
      cursor: pointer;
    }
  }
`
export const _InputStyles = styled.div`
  padding: 0 12px;
  border: 1px solid ${Variables.colorGrayDark};
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  background-color: ${Variables.colorSearchBar};

  & input {
    outline: none;
    width: 35vw;
    max-width: 540px;
    height: 30px;
    background-color: transparent;
    font-size: 16px;
    color: white;

    @media (max-width: 868px) {
      width: 20vw;
    }

    @media (max-width: 700px) {
      width: 12vw;
    }
  }
`
