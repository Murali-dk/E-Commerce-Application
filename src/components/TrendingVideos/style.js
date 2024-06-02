import styled from 'styled-components'

export const TrendingContainer = styled.div`
    background-color:${p => p.bgColor};
    min-height:100vh;
    overflow-y:auto;
    margin-top:60px;
    margin-bottom:60px;
`
export const TrendingVideoTitle = styled.div`
    diplay:flex;
    align-items:center;
`
export const TitleIconContainer = styled.div`
    width:40px;
    height:40px;
    border-radius:80px;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const TrendingText = styled.h1`
    color:${p => p.color};
`
export const TrendingVideoList = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:column;
`
export const LoaderContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
