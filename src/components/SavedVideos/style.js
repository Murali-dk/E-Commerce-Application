import styled from 'styled-components'

export const SavedContainer = styled.div`
    background-color:${p => p.bgColor};
    min-height:100vh;
    margin-top:60px;
    overflow-y:auto;
`
export const SavedVideoTitle = styled.div`
    display:flex;
    align-items:center;
`
export const SavedTitleIconContainer = styled.div`
    border-radius:80px;
    width:40px;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const SavedText = styled.h1`
    color:${p => p.color};
`
export const SaveVideoList = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:column;
`
export const NoSavedVideosView = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:none;
`
export const NoSavedVideosImage = styled.img`
    width:200px;
`
export const NoSavedVideosHeading = styled.h1`
    color:${p => p.headingColor};
`
export const NoSavedVideosNote = styled.p`
    color:${p => p.noteColor};
`
