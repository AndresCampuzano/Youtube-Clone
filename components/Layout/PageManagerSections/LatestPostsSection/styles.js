import styled from "styled-components"

export const _Container = styled.section`
  margin: 24px 32px;
  border-top: 4px solid #303030;

  & h3 {
    margin: 20px 0;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }
`

export const _ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  /* grid-template-rows: repeat(2, 1fr); */
  grid-column-gap: 16px;
  /* grid-row-gap: 32px; */

  @media (max-width: 2303px) {
    grid-template-columns: repeat(5, 1fr);

    /* Removing elements from dom */
    & article:nth-last-of-type(-n + 1) {
      display: none;
    }
  }

  @media (max-width: 1968px) {
    grid-template-columns: repeat(4, 1fr);

    /* Removing elements from dom */
    & article:nth-last-of-type(-n + 2) {
      display: none;
    }
  }

  @media (max-width: 1631px) {
    grid-template-columns: repeat(3, 1fr);

    /* Removing elements from dom */
    & article:nth-last-of-type(-n + 3) {
      display: none;
    }
  }

  @media (max-width: 1127px) {
    grid-template-columns: repeat(2, 1fr);

    /* Removing elements from dom */
    & article:nth-last-of-type(-n + 4) {
      display: none;
    }
  }

  @media (max-width: 719px) {
    grid-template-columns: repeat(1, 1fr);

    /* Removing elements from dom */
    & article:nth-last-of-type(-n + 5) {
      display: none;
    }
  }
`
