import { useRef, useState } from "react"

export const useScroll = () => {
  const scrollContainer = useRef()
  // Controlling scroll with arrows
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  // Controlling scroll by mouse/touches
  const [isScrolling, setIsScrolling] = useState(false)
  const [numberScroll, setNumberScroll] = useState()

  // Controlling scroll with arrows at corners of container
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

  return {
    captureScrollValue,
    goRightArrow,
    goLeftArrow,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    scrollContainer,
    showLeftArrow,
    showRightArrow,
  }
}
