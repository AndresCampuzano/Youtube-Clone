import { useState, useEffect } from "react"
import axios from "axios"

import { LatestPostsSection } from "../PageManagerSections/LatestPostsSection"
import { TopBannerSection } from "../PageManagerSections/TopBannerSection"
import { TrendingSection } from "../PageManagerSections/TrendingSection"
import { _Container } from "./styles"

export const PageManager = () => {
  const [dataTrTop, setDataTrTop] = useState(null)
  const [dataTrBottom, setDataTrTBottom] = useState(null)

  useEffect(() => {
    handleSearch()
  }, [])

  const handleSearch = async () => {
    const countryCodeTop = "US"
    const maxResultsTop = 12
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${maxResultsTop}&regionCode=${countryCodeTop}&key=${process.env.URL_KEY}`
      )
      .then(({ data: { items } }) => {
        setDataTrTop(items)
      })
      .catch((error) => {
        console.error("error: ", error)
      })

    const countryCodeBottom = "CA"
    const maxResultsBottom = 12

    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${maxResultsBottom}&regionCode=${countryCodeBottom}&key=${process.env.URL_KEY}`
      )
      .then(({ data: { items } }) => {
        setDataTrTBottom(items)
      })
      .catch((error) => {
        console.error("error: ", error)
      })

    // axios
    //   .get(
    //     `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${maxResults}&regionCode=${countryCode}&key=${process.env.URL_KEY}`
    //   )
    //   .then(({ data: { items } }) => console.log(items[0]))
  }

  return (
    <_Container>
      <TopBannerSection />
      <TrendingSection data={dataTrTop} />
      <LatestPostsSection />
      <TrendingSection data={dataTrBottom} />
    </_Container>
  )
}
