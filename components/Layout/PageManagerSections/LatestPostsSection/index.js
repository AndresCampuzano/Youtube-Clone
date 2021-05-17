import { PostCard } from "../../../Cards/PostCard"
import { _Container, _ContainerCards } from "./styles"

export const LatestPostsSection = () => {
  return (
    <_Container>
      <h3>Latest YouTube posts</h3>
      <_ContainerCards>
        <PostCard
          channelImage="/twice.jpg"
          channelName="TWICE"
          commentsNumber="984"
          likesCount="5.6K"
          textPost="Hi ONCE💕 Watch our first TikTok #SoundOff live stream
          this Wed. at 9:30pm ET/6:30pm PT
          (KST: Thurs. 5/13 @ 10:30am)! 📣"
          timeAgo="15 hours"
          imagePost="/twice.webp"
        />
        <PostCard
          channelImage="/andres_photo.jpg"
          channelName="Andres Campuzano"
          commentsNumber="26"
          likesCount="1.8K"
          textPost="React is an open-source front-end JavaScript library for building user interfaces or UI components. "
          timeAgo="15 hours"
          imagePost="/react.jpg"
        />
        <PostCard
          channelImage="/js.png"
          channelName="JS Master"
          commentsNumber="253"
          likesCount="3K"
          textPost={`JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.`}
          timeAgo="15 hours"
          imagePost="/javascript.webp"
        />
        <PostCard
          channelImage="/mac.jpg"
          channelName="Apple World"
          commentsNumber="12"
          likesCount="1.2K"
          textPost={`Pay over time, interest-free for your Mac mini with Apple Card Monthly Installments. Free delivery.`}
          timeAgo="15 hours"
          imagePost="/mac.jpg"
        />

        <PostCard
          channelImage="/dualipa.jpg"
          channelName="Dua Lipa"
          commentsNumber="856K"
          likesCount="1M"
          textPost="FUTURE NOSTALGIA MEDLEY AT THE @BRITs !!! ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥 I wanna do it again again again!!!!"
          timeAgo="15 hours"
          imagePost="/dualipa.jpg"
        />
        <PostCard
          channelImage="/travel.jpg"
          channelName="Travelling Channel"
          commentsNumber="23"
          likesCount="256"
          textPost="This one is trippy!! I hope you enjoy it 🦄 🍄 🌈"
          timeAgo="15 hours"
          imagePost="/travel.jpg"
        />
      </_ContainerCards>
    </_Container>
  )
}
