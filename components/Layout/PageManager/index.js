import { LatestPostsSection } from "../PageManagerSections/LatestPostsSection"
import { TopBannerSection } from "../PageManagerSections/TopBannerSection"
import { TrendingSection } from "../PageManagerSections/TrendingSection"
import { _Container } from "./styles"

export const PageManager = () => {
  return (
    <_Container>
      <TopBannerSection />
      <TrendingSection />
      <LatestPostsSection />
    </_Container>
  )
}
