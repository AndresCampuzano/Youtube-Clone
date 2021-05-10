import { useContext } from "react"
import { Context } from "../../data/Context"

import { _ContainerLarge, _ContainerSmall } from "./styles"

export const ItemNormal = ({ icon, title, onClick }) => {
  const { bigNavBar } = useContext(Context)

  if (bigNavBar) {
    return (
      <_ContainerLarge onClick={onClick}>
        {icon}
        <p>{title}</p>
      </_ContainerLarge>
    )
  } else {
    return (
      <_ContainerSmall onClick={onClick}>
        {icon}
        <p>{title}</p>
      </_ContainerSmall>
    )
  }
}
