import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  ItemLink,
  TrendingListItem,
  TrendingThumbnailImage,
  TrendingVideoDetails,
  TrendingProfileImage,
  TrendingContentSection,
  TrendingTitle,
  TrendinChannelName,
  TrendingViewsAndDate,
  TrendingDot,
} from './style'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <ItemLink to={`/videos/${id}`} className="link">
            <TrendingListItem>
              <TrendingThumbnailImage
                alt="video thumbnail"
                src={thumbnailUrl}
              />
              <TrendingVideoDetails>
                <TrendingProfileImage
                  alt="channel logo"
                  src={profileImageUrl}
                />
                <TrendingContentSection>
                  <TrendingTitle color={textColor}>{title}</TrendingTitle>
                  <TrendinChannelName color={textColor}>
                    {name}
                  </TrendinChannelName>
                  <TrendingViewsAndDate color={textColor}>
                    {viewCount} views<TrendingDot> &#8226; </TrendingDot>
                    {publishedAt}
                  </TrendingViewsAndDate>
                </TrendingContentSection>
              </TrendingVideoDetails>
            </TrendingListItem>
          </ItemLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default VideoCard
