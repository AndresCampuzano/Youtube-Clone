import { IconExploreDark } from "../../Icons/NavbarLeft/IconExploreDark"
import { IconHomeDark } from "../../Icons/NavbarLeft/IconHomeDark"
import { ItemNormal } from "../../ItemsNavbar/ItemNormal"
import { Container } from "./styles"

export const LeftNavbar = () => {
  return (
    <Container>
      <ItemNormal icon={<IconHomeDark />} title="Home" />
      <ItemNormal icon={<IconExploreDark />} title="Explore" />
    </Container>
  )
}
