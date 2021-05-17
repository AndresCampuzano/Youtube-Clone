import { _Container, _InputStyles, _FormStyles } from "./styles"
import { IconLoupeDark } from "../Icons/TopBar/IconLoupeDark"
import { IconMicroDark } from "../Icons/TopBar/IconMicroDark"

export const SearchBar = () => {
  const handleSubmit = (e) => {
    e.PreventDefault()
  }

  return (
    <_Container>
      <_FormStyles onSubmit={handleSubmit}>
        <_InputStyles>
          <input type="text" placeholder="Search" />
        </_InputStyles>
        <button>
          <IconLoupeDark />
        </button>
      </_FormStyles>
      <IconMicroDark />
    </_Container>
  )
}
