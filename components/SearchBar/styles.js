import styled from "styled-components"
import { Variables } from "../../styles/Variables"

export const Container = styled.div`
  & form {
    display: flex;
    align-items: center;
  }
`
export const _InputStyles = styled.div`
  padding: 0 16px;
  width: 575px;
  height: 32px;
  border: 1px solid ${Variables.colorGrayDark};
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  background-color: ${Variables.colorSearchBar};
  & input {
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
`

export const _Button = styled.button`
  margin-right: 8px;
  width: 65px;
  height: 34px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  background-color: ${Variables.colorGrayDark};

  & :hover {
    cursor: pointer;
  }
`
