import { _Container, _Content, _StyledImageMain, _DivButton } from "./styles"

export const TopBanner = () => {
  return (
    <_Container>
      <_Content>
        <_StyledImageMain
          src="/youtube-music-logo.png"
          width={320}
          height={24}
          layout="fixed"
          alt="Youtube Music"
        />
        <h2>
          Get family plan. YouTube Music ad-free and background play for up to 6
          household members.
        </h2>
        <_DivButton>
          <p>GET IT NOW</p>
        </_DivButton>
      </_Content>
    </_Container>
  )
}
