import { PostCard } from "../../../Cards/PostCard"
import { _Container, _ContainerCards } from "./styles"

export const LatestPostsSection = () => {
  return (
    <_Container>
      <h3>Latest YouTube posts</h3>
      <_ContainerCards>
        <PostCard
          channelImage="/andres_photo.jpg"
          channelName="WIZONE PD48"
          commentsNumber="12"
          likesCount="1.8K"
          textPost={`🎯200516 🌸Sakura IG stories “My eyes are really swollen after waking up in the morning"🥺

        📌 From Meru's Insta Story.

        "Nako's hand was weird so I filmed it" (I was given permission)`}
          timeAgo="15 hours"
          imagePost="/twice.webp"
        />
        <PostCard
          channelImage="/andres_photo.jpg"
          channelName="ANDRES CAMPUZANO"
          commentsNumber="12"
          likesCount="1.8K"
          textPost="React is an open-source front-end JavaScript library for building user interfaces or UI components. "
          timeAgo="15 hours"
          imagePost="/react.jpg"
        />
        <PostCard
          channelImage="/andres_photo.jpg"
          channelName="WIZONE PD48"
          commentsNumber="12"
          likesCount="1.8K"
          textPost={`🎯200516 🌸Sakura IG stories “My eyes are really swollen after waking up in the morning"🥺

        📌 From Meru's Insta Story.

        "Nako's hand was weird so I filmed it" (I was given permission)`}
          timeAgo="15 hours"
          imagePost="/javascript.webp"
        />
        <PostCard
          channelImage="/andres_photo.jpg"
          channelName="WIZONE PD48"
          commentsNumber="12"
          likesCount="1.8K"
          textPost={`🎯200516 🌸Sakura IG stories “My eyes are really swollen after waking up in the morning"🥺

        📌 From Meru's Insta Story.

        "Nako's hand was weird so I filmed it" (I was given permission)`}
          timeAgo="15 hours"
          imagePost="/mac.jpg"
        />

        <PostCard
          channelImage="/andres_photo.jpg"
          channelName="WIZONE PD48"
          commentsNumber="12"
          likesCount="1.8K"
          textPost={`🎯200516 🌸Sakura IG stories “My eyes are really swollen after waking up in the morning"🥺

        📌 From Meru's Insta Story.

        "Nako's hand was weird so I filmed it" (I was given permission)`}
          timeAgo="15 hours"
          imagePost="/dualipa.jpg"
        />
        <PostCard
          channelImage="/andres_photo.jpg"
          channelName="WIZONE PD48"
          commentsNumber="12"
          likesCount="1.8K"
          textPost={`🎯200516 🌸Sakura IG stories “My eyes are really swollen after waking up in the morning"🥺

        📌 From Meru's Insta Story.

        "Nako's hand was weird so I filmed it" (I was given permission)`}
          timeAgo="15 hours"
          imagePost="/travel.jpg"
        />
      </_ContainerCards>
    </_Container>
  )
}
