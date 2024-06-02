import styled from 'styled-components'

export const ListItem = styled.li`
    background:none;
    width:100%;
    display:flex;
    flex-direction:column;
    align-self:center;
    @media (min-width: 768px) {
        width: 280px;
        margin-right: 20px;
    }
`
export const ThumbnailImage = styled.img`
    width:100%;
`
export const VideoDetails = styled.div`
    display:flex;
    justify-content:flex-start;
    width:100%;
`
export const ProfileImage = styled.img`
    width:30px;
    height:30px;
    border-radius:50px;
    margin:20px;
`
export const ContentSection = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    padding:8px;
`
export const Title = styled.p`
    color:${props => props.color};
    font-size:13px;
`
export const ChannelName = styled.p`
    color:${props => props.color};
    font-size:13px;
`
export const ViewsAndDate = styled.p`
    color:${props => props.color};
    font-size:13px;
`
export const Dot = styled.span`
    width:20px;
    height:20px;
    border-radius:50px;
    padding:5px;
`
