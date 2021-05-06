import styled from "styled-components"

export const _Container = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 32px;

  @media (max-width: 2300px) {
    grid-template-columns: repeat(5, 1fr);

    /* Removing elements from dom */
    & article:nth-last-of-type(-n + 2) {
      display: none;
    }
  }

  @media (max-width: 1968px) {
    grid-template-columns: repeat(4, 1fr);

    /* Removing elements from dom */
    & article:nth-last-of-type(-n + 4) {
      display: none;
    }
  }

  @media (max-width: 1143px) {
    grid-template-columns: repeat(3, 1fr);

    /* Removing elements from dom */
    & article:nth-last-of-type(-n + 6) {
      display: none;
    }
  }

  @media (max-width: 887px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);

    /* Removing elements from dom */
    & article:nth-last-of-type(-n + 6) {
      display: none;
    }
  }
`
