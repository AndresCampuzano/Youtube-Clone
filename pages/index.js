import { LeftNavbar } from "../components/Layout/LeftNavbar"
import { PageManager } from "../components/Layout/PageManager"
import { TopNavbar } from "../components/Layout/TopNavbar"

export default function index() {
  return (
    <>
      <TopNavbar />
      <LeftNavbar />
      <PageManager />
    </>
  )
}
