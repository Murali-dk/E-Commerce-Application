import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
    text-decoration:none;
`
export const GamingListItem = styled.li`
    background:none;
    width:100px;
    display:flex;
    flex-direction:column;
    @media (min-width:768px) {
        width:280px;
        margin-right:20px;
    }
`
export const GamingThumbnaikImage = styled.img`
    width:100vh;
    height:300px;
    align-self:center;
    @media (min-width: 768px) {
        width:280px;
    }
`
export const GamingContentSection = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
`
export const GamingTitle = styled.p`
    color:${props => props.color};
`
export const GamingViewsAndDate = styled.p`
    color:${props => props.color};
`
