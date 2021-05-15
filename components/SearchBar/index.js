import { Container, _InputStyles } from "./styles"
import { IconLoupeDark } from "../Icons/TopBar/IconLoupeDark"
import { IconMicroDark } from "../Icons/TopBar/IconMicroDark"

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
        <button>
          <IconLoupeDark />
        </button>
      </form>
      <IconMicroDark />
    </Container>
  )
}
