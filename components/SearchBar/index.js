import { IconLoupeDark } from "../Icons/TopBar/IconLoupeDark"
import { IconMicroDark } from "../Icons/TopBar/IconMicroDark"
import { Container, _InputStyles, _Button } from "./styles"

export const SearchBar = () => {
  const handleSubmit = (e) => {
    e.PreventDefault()
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <_InputStyles>
          <input type="text" placeholder="Search" />
        </_InputStyles>
        <_Button>
          <IconLoupeDark />
        </_Button>
        <IconMicroDark />
      </form>
    </Container>
  )
}
