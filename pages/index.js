import { LeftNavbar } from "../components/Layout/LeftNavbar"
import { PageManager } from "../components/Layout/PageManager"
import { ScrollContainer } from "../components/Layout/ScrollContainer"
import { TopNavbar } from "../components/Layout/TopNavbar"

export default function index() {
  return (
    <>
      <TopNavbar />
      <ScrollContainer />
      <LeftNavbar />
      <PageManager />
    </>
  )
}
