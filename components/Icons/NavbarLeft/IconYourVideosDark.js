import * as React from "react"

import { Variables } from "../../../styles/Variables"

export const IconYourVideosDark = (props) => {
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
        d="M18.4 5.6v12.8H5.6V5.6h12.8zm0-1.8H5.6a1.8 1.8 0 0 0-1.8 1.8v12.8a1.8 1.8 0 0 0 1.8 1.9h12.8a1.8 1.8 0 0 0 1.9-1.9V5.6a1.8 1.8 0 0 0-1.9-1.8z"
      />
      <path fill={Variables.colorIconsIdle} d="M10.2 9v6.5l5-3.2-5-3.2z" />
    </svg>
  )
}
