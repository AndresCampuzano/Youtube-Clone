import * as React from "react"

import { Variables } from "../../../styles/Variables"

export const IconHomeDark = (props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={Variables.colorIconsIdle}
        d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"
      />
    </svg>
  )
}
