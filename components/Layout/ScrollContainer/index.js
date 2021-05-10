import { useRef, useState } from "react"

import { SmallCardTopScroll } from "../../Cards/SmallCardTopScroll"
import { IconArrowLeftDark } from "../../Icons/TopBar/IconArrowLeftDark"
import { IconArrowRightDark } from "../../Icons/TopBar/IconArrowRightDark"
import { _Container, _LeftArrow, _RightArrow } from "./styles"

export const ScrollContainer = () => {
  const scrollContainer = useRef()
  // Controlling scroll with arrows
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  // Controlling scroll by mouse/touches
  const [isScrolling, setIsScrolling] = useState(false)
  const [numberScroll, setNumberScroll] = useState()

  // Controlling scroll with arrows
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

  const goRightArrow = () => {
    scrollContainer.current.scrollLeft -= 50
  }

  const goLeftArrow = () => {
    scrollContainer.current.scrollLeft += 50
  }

  // Controlling scroll by mouse/touches
  const onMouseDown = () => {
    setIsScrolling(true)
  }

  const onMouseUp = () => {
    setIsScrolling(false)
  }

  const onMouseMove = (e) => {
    setNumberScroll(e.view.innerWidth - e.clientX)
    if (isScrolling) {
      const speedToScroll = e.view.innerWidth - e.clientX - numberScroll
      if (numberScroll < e.view.innerWidth - e.clientX) {
        scrollContainer.current.scrollLeft += speedToScroll
      }
      if (numberScroll > e.view.innerWidth - e.clientX) {
        scrollContainer.current.scrollLeft -= Math.abs(speedToScroll)
      }
    }
  }

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
