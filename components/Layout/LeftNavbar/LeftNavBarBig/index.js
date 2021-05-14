import { _Container } from "./styles"
import { ItemNormal } from "../../../ItemsNavbar/ItemNormal"
// Icons
import { IconExploreDark } from "../../../Icons/NavbarLeft/IconExploreDark"
import { IconHomeDark } from "../../../Icons/NavbarLeft/IconHomeDark"
import { IconSubscriptionsDark } from "../../../Icons/NavbarLeft/IconSubscriptionsDark"
import { IconOriginalsDark } from "../../../Icons/NavbarLeft/IconOriginalsDark"
import { IconYoutubeMusicDark } from "../../../Icons/NavbarLeft/IconYoutubeMusicDark"
import { IconLibraryDark } from "../../../Icons/NavbarLeft/IconLibraryDark"
import { IconHistoryDark } from "../../../Icons/NavbarLeft/IconHistoryDark"
import { IconYourVideosDark } from "../../../Icons/NavbarLeft/IconYourVideosDark"
import { IconWatchLaterDark } from "../../../Icons/NavbarLeft/IconWatchLaterDark"
import { IconLikedVideosDark } from "../../../Icons/NavbarLeft/IconLikedVideosDark"
import { IconGamingDark } from "../../../Icons/NavbarLeft/IconGamingDark"
import { IconLiveDark } from "../../../Icons/NavbarLeft/IconLiveDark"
import { IconLearningDark } from "../../../Icons/NavbarLeft/IconLearningDark"
import { IconSportsDark } from "../../../Icons/NavbarLeft/IconSportsDark"
import { IconSettingsDark } from "../../../Icons/NavbarLeft/IconSettingsDark"
import { IconReportHistoryDark } from "../../../Icons/NavbarLeft/IconReportHistoryDark"
import { IconHelpDark } from "../../../Icons/NavbarLeft/IconHelpDark"
import { IconSendFeedbackDark } from "../../../Icons/NavbarLeft/IconSendFeedbackDark"

export const LeftNavBarBig = () => {
  return (
    <>
      <_Container>
        <ItemNormal icon={<IconHomeDark />} title="Home" />
        <ItemNormal icon={<IconExploreDark />} title="Explore" />
        <ItemNormal icon={<IconSubscriptionsDark />} title="Subscriptions" />
        <ItemNormal icon={<IconOriginalsDark />} title="Originals" />
        <ItemNormal icon={<IconYoutubeMusicDark />} title="YouTube Music" />

        <hr />

        <ItemNormal icon={<IconLibraryDark />} title="Library" />

        <ItemNormal icon={<IconHistoryDark />} title="History" />
        <ItemNormal icon={<IconYourVideosDark />} title="Your videos" />
        <ItemNormal icon={<IconWatchLaterDark />} title="Watch later" />
        <ItemNormal icon={<IconLikedVideosDark />} title="Liked videos" />
        <hr />
        <h3>MORE FROM YOUTUBE</h3>
        <ItemNormal icon={<IconGamingDark />} title="Gaming" />
        <ItemNormal icon={<IconLiveDark />} title="Live" />
        <ItemNormal icon={<IconLearningDark />} title="Learning" />
        <ItemNormal icon={<IconSportsDark />} title="Sports" />
        <hr />
        <ItemNormal icon={<IconSettingsDark />} title="Settings" />
        <ItemNormal icon={<IconReportHistoryDark />} title="Report history" />
        <ItemNormal icon={<IconHelpDark />} title="Help" />
        <ItemNormal icon={<IconSendFeedbackDark />} title="Send feedback" />
      </_Container>
    </>
  )
}
