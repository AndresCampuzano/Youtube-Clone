import { IconComment } from "../../Icons/PostCard/IconComment"
import { IconDislike } from "../../Icons/PostCard/IconDislike"
import { IconDots } from "../../Icons/PostCard/IconDots"
import { IconLike } from "../../Icons/PostCard/IconLike"
import {
  _Container,
  _DivChannel,
  _StyledChannelImage,
  _DivContent,
  _StyledImagePost,
  _DivIcons,
  _LeftIcons,
  _RightIcons,
} from "./styles"

export const PostCard = ({
  channelImage,
  channelName,
  timeAgo,
  textPost,
  imagePost,
  likesCount,
  commentsNumber,
}) => {
  return (
    <_Container>
      <_DivChannel>
        <_StyledChannelImage
          src={channelImage}
          width={24}
          height={24}
          layout="fixed"
          alt={channelName}
        />
        <p>{channelName}</p>
        <p>• {timeAgo} ago</p>
      </_DivChannel>
      <_DivContent>
        <p>{textPost}</p>
        <_StyledImagePost
          src={imagePost}
          width={150}
          height={116}
          layout="fixed"
          alt={channelName}
          quality="100"
          objectFit="cover"
        />
      </_DivContent>
      <_DivIcons>
        <_LeftIcons>
          <IconLike />
          <p>{likesCount}</p>
          <IconDislike />
        </_LeftIcons>
        <_RightIcons>
          <div>
            <IconComment />
            <p>{commentsNumber}</p>
            <IconDots />
          </div>
        </_RightIcons>
      </_DivIcons>
    </_Container>
  )
}
