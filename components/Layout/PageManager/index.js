import { useContext } from "react"
import { Context } from "../../data/Context"
import { TrendingSection } from "../PageManagerSections/TrendingSection"
import { _Container } from "./styles"

export const PageManager = () => {
  const { bigNavBar } = useContext(Context)

  const responsiveStyles = !bigNavBar
    ? {
        marginLeft: "72px",
      }
    : {}
  return (
    <_Container style={responsiveStyles}>
      <TrendingSection />
    </_Container>
  )
}
