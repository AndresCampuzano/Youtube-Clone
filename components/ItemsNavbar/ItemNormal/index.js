import { Container } from "./styles"

export const ItemNormal = ({ icon, title, onClick }) => {
  return (
    <Container onClick={onClick}>
      {icon}
      {title}
    </Container>
  )
}
