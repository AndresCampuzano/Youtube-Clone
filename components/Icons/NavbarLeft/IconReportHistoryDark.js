import * as React from "react"

import { Variables } from "../../../styles/Variables"

export const IconReportHistoryDark = (props) => {
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
        d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"
      />
    </svg>
  )
}
