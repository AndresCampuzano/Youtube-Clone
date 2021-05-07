import { useState, useEffect } from "react"
import axios from "axios"

import { VideoCard } from "../../../Cards/VideoCard"
import { _Container } from "./styles"

export const TrendingSection = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    handleSearch()
  }, [])

  const handleSearch = async () => {
    const countryCode = "CO"
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=${countryCode}&key=${process.env.URL_KEY}`
      )
      .then(({ data: { items } }) => {
        setData(items)
      })
      .catch((error) => {
        console.error("error: ", error)
      })
  }
  return (
    <_Container>
      {data?.map(
        ({
          id,
          snippet: {
            title,
            channelId,
            channelTitle,
            thumbnails: {
              medium: { url },
            },
          },
          statistics: { viewCount },
        }) => (
          <VideoCard
            key={id}
            image={url}
            title={title}
            channelTitle={channelTitle}
            viewCount={viewCount}
            channelId={channelId}
          />
        )
      )}
    </_Container>
  )
}
