import axios from "axios"
import { useEffect, useState } from "react"

import { IconMoreOptions } from "../../Icons/Card/IconMoreOptions"
import { SmallIconWatchLaterHover } from "./SmallIconWatchLaterHover"
import { SmallIconAddToQueue } from "./SmallIconAddToQueue"
import { IconWatchLaterCard } from "../../Icons/Card/IconWatchLaterCard"
import { IconAddToQueueCard } from "../../Icons/Card/IconAddToQueueCard"
import { useFormatViews } from "../../hooks/useFormatViews"
import { useTimeAgo } from "../../hooks/useTimeAgo"
import {
  _Container,
  _StyledImageMain,
  _ContentContainer,
  _DivChannelImage,
  _DivText,
  _DivMoreOptions,
  _StyledImageChannel,
  _DivChannelAndTextContainer,
} from "./styles"

export const VideoCard = ({
  title,
  image,
  channelTitle,
  publishedAt,
  viewCount,
  channelId,
}) => {
  const [channelImage, setChannelImage] = useState()
  const [hoverExtraContent, setHoverExtraContent] = useState(false)

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.URL_KEY}`
      )
      .then(
        ({
          data: {
            items: [
              {
                snippet: {
                  thumbnails: {
                    default: { url },
                  },
                },
              },
            ],
          },
        }) => {
          setChannelImage(url)
        }
      )
      .catch((error) => {
        console.error("error: ", error)
      })
  }, [channelId])

  // console.log(publishedAt)

  const formatNumber = useFormatViews
  const formatTimeAgo = useTimeAgo

  return (
    <_Container
      onMouseEnter={() => setHoverExtraContent(true)}
      onMouseLeave={() => setHoverExtraContent(false)}
    >
      {hoverExtraContent && (
        <>
          <SmallIconWatchLaterHover
            text="WATCH LATER"
            icon={<IconWatchLaterCard />}
          />
          <SmallIconAddToQueue
            text="ADD TO QUEUE"
            icon={<IconAddToQueueCard />}
          />
        </>
      )}

      <_StyledImageMain
        src={image}
        width={680}
        height={380}
        layout="responsive"
        alt={title}
      />

      <_ContentContainer>
        <_DivChannelAndTextContainer>
          <_DivChannelImage>
            {channelImage && (
              <_StyledImageChannel
                src={channelImage}
                width={36}
                height={36}
                layout="fixed"
                alt="Title channel here"
              />
            )}
          </_DivChannelImage>

          <_DivText>
            <h2>{title}</h2>
            <h3>{channelTitle}</h3>
            <p>
              {formatNumber(viewCount, 1)} views . {formatTimeAgo(publishedAt)}{" "}
              ago
            </p>
          </_DivText>
        </_DivChannelAndTextContainer>

        <_DivMoreOptions>
          {hoverExtraContent && <IconMoreOptions />}
        </_DivMoreOptions>
      </_ContentContainer>
    </_Container>
  )
}
