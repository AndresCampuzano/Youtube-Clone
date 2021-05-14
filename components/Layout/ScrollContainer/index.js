import { SmallCardTopScroll } from "../../Cards/SmallCardTopScroll"
import { IconArrowLeftDark } from "../../Icons/TopBar/IconArrowLeftDark"
import { IconArrowRightDark } from "../../Icons/TopBar/IconArrowRightDark"
import { _Container, _LeftArrow, _RightArrow } from "./styles"
import { useScroll } from "../../hooks/useScroll"

export const ScrollContainer = () => {
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

  return (
    <_Container
      ref={scrollContainer}
      onScroll={captureScrollValue}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {showLeftArrow && (
        <_LeftArrow>
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
