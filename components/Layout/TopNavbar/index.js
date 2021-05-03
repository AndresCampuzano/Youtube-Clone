import { IconAppsDark } from "../../Icons/TopBar/IconAppsDark"
import { IconBellDark } from "../../Icons/TopBar/IconBellDark"
import { IconMenuDark } from "../../Icons/TopBar/IconMenuDark"
import { IconUploadDark } from "../../Icons/TopBar/IconUploadDark"
import { IconYoutubePremiumDark } from "../../Icons/TopBar/IconYoutubePremiumDark"
import { SearchBar } from "../../SearchBar"
import {
  _Container,
  _PaddingContainer,
  _LeftIconsContainer,
  _CenterContainer,
  _RightIconsContainer,
  _StyledImage,
} from "./styles"

export const TopNavbar = () => {
  return (
    <_Container>
      <_PaddingContainer>
        <_LeftIconsContainer>
          <div>
            <IconMenuDark />
          </div>
          <IconYoutubePremiumDark />
        </_LeftIconsContainer>

        <_CenterContainer>
          <SearchBar />
        </_CenterContainer>

        <_RightIconsContainer>
          <IconUploadDark />
          <IconAppsDark />
          <IconBellDark />
          <_StyledImage
            src="/andres_photo.jpg"
            width={28}
            height={28}
            alt="Andres Campuzano"
          />
        </_RightIconsContainer>
      </_PaddingContainer>
    </_Container>
  )
}
