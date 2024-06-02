import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
    text-decoration:none;
`
export const TrendingListItem = styled.li`
    width:100%;
    background:none;
    display:flex;
    flex-direction:column;
    @media (min-width:768px){
        flex-direction:row;
    }
`
export const TrendingThumbnailImage = styled.img`
    width:100%;
    @media (min-width:768px){
        width:300px;
    }
`
export const TrendingVideoDetails = styled.div`
     display:flex;
    justify-content:flex-start;
    width:100%;
`
export const TrendingProfileImage = styled.img`
    width:30px;
`
export const TrendingContentSection = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
`
export const TrendingTitle = styled.p`
    color:${p => p.color};
`
export const TrendinChannelName = styled.p`
    color:${p => p.color};
`
export const TrendingViewsAndDate = styled.p`
     color:${p => p.color};
`
export const TrendingDot = styled.span`
    width:20px;
`
