import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import FailureView from '../FailureView'
import GameVideoCard from '../GameVideoCard'

import {
  GamingContainer,
  GamingTitleIconContainer,
  GamingVideoTitle,
  GamingVideoList,
  GamingText,
  LoaderContainer,
} from './style'

const apiStatusConstance = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingVideos extends Component {
  state = {gamingVideos: [], apiStatus: apiStatusConstance.initial}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstance.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updateData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideos: updateData,
        apiStatus: apiStatusConstance.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstance.failure})
    }
  }

  renderLodingView = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosView = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideoList>
        {gamingVideos.map(eachVideo => (
          <GameVideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </GamingVideoList>
    )
  }
  onRetry = () => {
    this.getVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderTrendingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstance.success:
        return this.renderVideosView()
      case apiStatusConstance.failure:
        return this.renderFailureView()
      case apiStatusConstance.inProgress:
        return this.renderLodingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <div>
              <Header />
              <NavigationBar />
              <GamingContainer data-testid="gaming" bg-color={bgColor}>
                <GamingVideoTitle>
                  <GamingTitleIconContainer>
                    <SiYoutubegaming size={35} color="#ff0000" />
                  </GamingTitleIconContainer>
                  <GamingText color={textColor}>Gaming</GamingText>
                </GamingVideoTitle>
                {this.renderTrendingVideos()}
              </GamingContainer>
            </div>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default GamingVideos
