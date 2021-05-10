import { useState, useEffect, useContext } from "react"
import { Context } from "../data/Context"

export const useWindowSize = () => {
  const { setBigNavBar } = useContext(Context)
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  console.log(windowSize.width)
  if (windowSize.width <= 1328) {
    setBigNavBar(false)
  }

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  return windowSize
}
