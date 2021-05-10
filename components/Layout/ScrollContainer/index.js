import { useContext } from "react"

import { SmallCardTopScroll } from "../../Cards/SmallCardTopScroll"
import { IconArrowLeftDark } from "../../Icons/TopBar/IconArrowLeftDark"
import { IconArrowRightDark } from "../../Icons/TopBar/IconArrowRightDark"
import { _Container, _LeftArrow, _RightArrow } from "./styles"
import { Context } from "../../data/Context"
import { useScroll } from "../../hooks/useScroll"

export const ScrollContainer = () => {
  const { bigNavBar } = useContext(Context)
  const {
    captureScrollValue,
    goRightArrow,
    goLeftArrow,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    scrollContainer,
    showLeftArrow,
    showRightArrow,
  } = useScroll()

  const responsiveStyles = !bigNavBar
    ? {
        left: "72px",
      }
    : {}

  return (
    <_Container
      ref={scrollContainer}
      onScroll={captureScrollValue}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      style={responsiveStyles}
    >
      {showLeftArrow && (
        <_LeftArrow style={responsiveStyles}>
          <IconArrowLeftDark onClick={goRightArrow} />
        </_LeftArrow>
      )}

      <SmallCardTopScroll text="All" />
      <SmallCardTopScroll text="Frontend" />
      <SmallCardTopScroll text="React JS" />
      <SmallCardTopScroll text="Javascript" />
      <SmallCardTopScroll text="Andres Campuzano" />
      <SmallCardTopScroll text="Next JS" />
      <SmallCardTopScroll text="Programming" />
      <SmallCardTopScroll text="Computer Programming" />
      <SmallCardTopScroll text="Gitlab" />
      <SmallCardTopScroll text="CSS & HTML" />
      <SmallCardTopScroll text="Lo Fi" />
      <SmallCardTopScroll text="Night" />
      <SmallCardTopScroll text="Desk setup" />
      <SmallCardTopScroll text="Tesla, Inc." />
      <SmallCardTopScroll text="TWICE" />
      <SmallCardTopScroll text="Eating" />
      <SmallCardTopScroll text="Beats" />
      <SmallCardTopScroll text="Chill-out music" />
      <SmallCardTopScroll text="Live" />
      <SmallCardTopScroll text="Muckbang" />
      <SmallCardTopScroll text="Azure DevOps" />
      <SmallCardTopScroll text="Tourist Destinations" />

      <SmallCardTopScroll text="Recently uploaded" />
      <SmallCardTopScroll text="Watched" />

      {showRightArrow && (
        <_RightArrow>
          <IconArrowRightDark onClick={goLeftArrow} />
        </_RightArrow>
      )}
    </_Container>
  )
}
