import {
  NotVideosView,
  NotVideosImage,
  NotVideosHeading,
  NotVideosNote,
  RetryButton,
  VideoCardList,
} from './style'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import HomeVideoCard from '../HomeVideoCard'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videosCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '@e2e8f0' : '#475569'

        return videosCount > 0 ? (
          <VideoCardList>
            {homeVideos.map(eachVideo => (
              <HomeVideoCard video={eachVideo} key={eachVideo.id} />
            ))}
          </VideoCardList>
        ) : (
          <NotVideosView>
            <NotVideosImage
              alt="no videos"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            />
            <NotVideosHeading headingColor={headingColor}>
              No Search results found
            </NotVideosHeading>
            <NotVideosNote noteColor={noteColor}>
              Try different key words or remove search filter
            </NotVideosNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NotVideosView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideos
