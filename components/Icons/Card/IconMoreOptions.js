import React, { useState } from "react"

export const IconMoreOptions = (props) => {
  const [hooverSvg, setHoverSvg] = useState(false)
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHoverSvg(true)}
      onMouseLeave={() => setHoverSvg(false)}
      {...props}
    >
      <path
        fill={hooverSvg ? "#fafafa" : "#a3a3a3"}
        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      />
    </svg>
  )
}
