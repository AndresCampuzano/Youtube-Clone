import { VideoCard } from "../../../Cards/VideoCard"
import { _Container } from "./styles"

export const TrendingSection = ({ data }) => {
  return (
    <_Container>
      {data?.map(
        ({
          id,
          snippet: {
            title,
            channelId,
            channelTitle,
            publishedAt,
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
            publishedAt={publishedAt}
          />
        )
      )}
    </_Container>
  )
}
