import styled from 'styled-components'

export const NotVideosView = styled.div`
    display:flex;
    flex-direction:column;
    justify-cotent:center;
    align-items:center;
    background:none;
`
export const NotVideosImage = styled.img`
    width:200px;
    @media (min-width:768px) {
        width:450px;
    }
`
export const NotVideosHeading = styled.h1`
    font-size:25px;
    color:${props => props.headingColor};
`
export const NotVideosNote = styled.p`
    font-size:25px;
    color:${props => props.noteColor};
`
export const RetryButton = styled.button`
    border:none;
    background-color:#4f46e5;
    color:#ffffff;
`
export const VideoCardList = styled.ul`
    list-style:none;
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
`
