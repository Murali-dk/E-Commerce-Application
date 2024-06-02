import styled from 'styled-components'

export const HomeContainer = styled.div`
    padding:10px;
    background-color:${props => props.bgColor};
    min-height:100vh;
    overflow-y:auto;
    margin-top:60px;
`
export const BannerContainer = styled.div`
    background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
    width:100%;
    background-size:cover;
    heigth:200px;
    display:${props => props.display};
    justify-content:space-between;
    padding:20px;
`
export const BannerLeftPart = styled.div`
    width:50%;
`
export const BannerRightPart = styled.div`
    display:flex;
    justify-content:felx-end;
`
export const BannerImage = styled.img`
    width:80px;
    height:30px;
`
export const BannerButton = styled.button`
    padding:5px 10px 5px 10px;
    border:1px solid #000000;
    color:#000000;
    background:none;
`
export const BannerText = styled.p`
    color:#000000;
`
export const BannerCloseButton = styled.button`
    border:none;
    background:none;
    height:25px;
`
export const SearchContainer = styled.div`
    display:flex;
    border:1px solid #909090;
    height: 40px;
`
export const SearchIconContainer = styled.button`
    display:flex;
    justify-content: center;
    align-item:center;
    background-color:#909090;
    border:none;
`
export const SearchInput = styled.input`
    background:none;
    width: 100%;
    outline:none;
    padding:5px;
    border:none;
    color:${props => props.color}
`
export const LoaderContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:80vh;
`
