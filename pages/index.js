import { LeftNavBarBig } from "../components/Layout/LeftNavbar/LeftNavBarBig"
import { LeftNavBarSmall } from "../components/Layout/LeftNavbar/LeftNavBarSmall"
import { PageManager } from "../components/Layout/PageManager"
import { ScrollContainer } from "../components/Layout/ScrollContainer"
import { TopNavbar } from "../components/Layout/TopNavbar"

export default function index() {
  return (
    <>
      <TopNavbar />
      <ScrollContainer />
      <LeftNavBarBig />
      <LeftNavBarSmall />
      <PageManager />
    </>
  )
}
