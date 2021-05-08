import { useRef, useState } from "react"

import { SmallCardTopScroll } from "../../Cards/SmallCardTopScroll"
import { IconArrowLeftDark } from "../../Icons/TopBar/IconArrowLeftDark"
import { IconArrowRightDark } from "../../Icons/TopBar/IconArrowRightDark"
import { _Container, _LeftArrow, _RightArrow } from "./styles"

export const ScrollContainer = () => {
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const scrollContainer = useRef()

  const captureScrollValue = (e) => {
    const clientWidth = e.target.clientWidth
    const scrollLeftValue = e.target.scrollLeft
    const scrollWidthValue = e.target.scrollWidth
    const result = scrollLeftValue - scrollWidthValue
    if (Math.abs(result) === clientWidth) {
      setShowRightArrow(false)
    } else {
      setShowRightArrow(true)
    }
    if (e.target.scrollLeft >= 50) {
      setShowLeftArrow(true)
    } else {
      setShowLeftArrow(false)
    }
  }

  const goRight = () => {
    // scrollContainer ? (scrollContainer.current.scrollLeft += 200) : null
    scrollContainer.current.scrollLeft -= 50
  }
  const goLeft = () => {
    scrollContainer.current.scrollLeft += 50
  }

  return (
    <_Container ref={scrollContainer} onScroll={captureScrollValue}>
      {showLeftArrow && (
        <_LeftArrow>
          <IconArrowLeftDark onClick={goRight} />
        </_LeftArrow>
      )}

      <SmallCardTopScroll text="Frontend" />
      <SmallCardTopScroll text="React JS" />
      <SmallCardTopScroll text="Javascript" />
      <SmallCardTopScroll text="Andres Campuzano" />
      <SmallCardTopScroll text="Lo Fi" />
      <SmallCardTopScroll text="Computer Programming" />
      <SmallCardTopScroll text="Next JS" />
      <SmallCardTopScroll text="Night" />
      <SmallCardTopScroll text="Desk setup" />
      <SmallCardTopScroll text="Tesla, Inc." />
      <SmallCardTopScroll text="TWICE" />
      <SmallCardTopScroll text="Eating" />
      <SmallCardTopScroll text="Beats" />
      <SmallCardTopScroll text="Chill-out music" />
      <SmallCardTopScroll text="Live" />
      <SmallCardTopScroll text="Muckbang" />
      <SmallCardTopScroll text="Programming" />
      <SmallCardTopScroll text="React Native" />
      <SmallCardTopScroll text="Azure DevOps" />
      <SmallCardTopScroll text="Gitlab" />
      <SmallCardTopScroll text="Tourist Destinations" />

      <SmallCardTopScroll text="Recently uploaded" />
      <SmallCardTopScroll text="Watched" />

      {showRightArrow && (
        <_RightArrow>
          <IconArrowRightDark onClick={goLeft} />
        </_RightArrow>
      )}
    </_Container>
  )
}
