import { IconMoreOptions } from "../../Icons/Card/IconMoreOptions"
import {
  _Container,
  _StyledImageMain,
  _ContentContainer,
  _DivChannelImage,
  _DivText,
  _DivMoreOptions,
  _StyledImageChannel,
} from "./styles"

export const VideoCard = () => {
  return (
    <_Container>
      <_StyledImageMain
        src="/demo.png"
        width={680}
        height={380}
        layout="responsive"
        alt="Title video here"
      />

      <_ContentContainer>
        <_DivChannelImage>
          <_StyledImageChannel
            src="/andres_photo.jpg"
            width={36}
            height={36}
            layout="fixed"
            alt="Title channel here"
          />
        </_DivChannelImage>

        <_DivText>
          <h2>
            🌙Midnight Coding in Chicago | LoFi Jazz Hip-Hop [Code - Relax -
            Study]
          </h2>
          <h3>The Soul of Wind</h3>
          <p>123K views . 5 days ago</p>
        </_DivText>

        <_DivMoreOptions>
          <IconMoreOptions />
        </_DivMoreOptions>
      </_ContentContainer>
    </_Container>
  )
}
