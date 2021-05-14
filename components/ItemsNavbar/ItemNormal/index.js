import { _Container } from "./styles"

export const ItemNormal = ({ icon, title, onClick }) => {
  return (
    <_Container onClick={onClick}>
      {icon}
      <p>{title}</p>
    </_Container>
  )
}
