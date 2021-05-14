import { _Container } from "./styles"
import { ItemNormal } from "../../../ItemsNavbar/ItemNormal"
// Icons
import { IconExploreDark } from "../../../Icons/NavbarLeft/IconExploreDark"
import { IconHomeDark } from "../../../Icons/NavbarLeft/IconHomeDark"
import { IconSubscriptionsDark } from "../../../Icons/NavbarLeft/IconSubscriptionsDark"
import { IconOriginalsDark } from "../../../Icons/NavbarLeft/IconOriginalsDark"
import { IconYoutubeMusicDark } from "../../../Icons/NavbarLeft/IconYoutubeMusicDark"
import { IconLibraryDark } from "../../../Icons/NavbarLeft/IconLibraryDark"

export const LeftNavBarSmall = () => {
  return (
    <>
      <_Container>
        <ItemNormal icon={<IconHomeDark />} title="Home" />
        <ItemNormal icon={<IconExploreDark />} title="Explore" />
        <ItemNormal icon={<IconSubscriptionsDark />} title="Subscriptions" />
        <ItemNormal icon={<IconOriginalsDark />} title="Originals" />
        <ItemNormal icon={<IconYoutubeMusicDark />} title="YouTube Music" />
        <ItemNormal icon={<IconLibraryDark />} title="Library" />
      </_Container>
    </>
  )
}
