import styled from "styled-components"

import { Variables } from "../../../styles/Variables"

export const _Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 24px;
  height: 40px;

  & :hover {
    background-color: ${Variables.colorGrayDark};
    cursor: pointer;
  }

  & svg {
    margin-right: 24px;
  }

  @media (max-width: 1328px) {
    justify-content: center;
    flex-direction: column;
    padding: 16px 0px 14px 0px;

    & svg {
      margin-right: 0;
    }

    & p {
      margin-top: 5px;
      font-size: 10px;
      color: ${Variables.colorIconsIdle};
    }

    & :hover {
      background-color: ${Variables.colorGrayDark};
      cursor: pointer;
    }
  }
`

// export const _ContainerSmall = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   padding: 16px 0px 14px 0px;
//   /* height: 40px; */

//   & p {
//     margin-top: 5px;
//     font-size: 10px;
//     color: ${Variables.colorIconsIdle};
//   }

//   & :hover {
//     background-color: ${Variables.colorGrayDark};
//     cursor: pointer;
//   }
// `
