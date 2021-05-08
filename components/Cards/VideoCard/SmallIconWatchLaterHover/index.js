import { useState } from "react"

import { _Container, _DivIconContainer, _DivTextContainer } from "./styles"

export const SmallIconWatchLaterHover = ({ text = "Testing text", icon }) => {
  const [hoverText, setHoverText] = useState(false)
  return (
    <_Container
      onMouseEnter={() => setHoverText(true)}
      onMouseLeave={() => setHoverText(false)}
    >
      {hoverText && (
        <_DivTextContainer>
          <p>{text}</p>
        </_DivTextContainer>
      )}
      <_DivIconContainer>{icon}</_DivIconContainer>
    </_Container>
  )
}
