import * as React from "react"

import { Variables } from "../../../styles/Variables"

export const IconExploreDark = (props) => {
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
        d="M11.23 13.08c-.29-.21-.48-.51-.54-.86-.06-.35.02-.71.23-.99.21-.29.51-.48.86-.54.35-.06.7.02.99.23.29.21.48.51.54.86.06.35-.02.71-.23.99a1.327 1.327 0 01-1.08.56c-.28 0-.55-.08-.77-.25zM22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-3.97-6.03L9.8 9.8l-3.83 8.23 8.23-3.83 3.83-8.23z"
      />
    </svg>
  )
}
