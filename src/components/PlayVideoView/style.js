import styled from 'styled-components'

export const VideoPlayer = styled.div`
    padding:20px;
`
export const PlayVideoTitle = styled.p`
    color=${p => p.color};
`
export const PlayVideoStatuContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const PlayVideoStatus = styled.p`
    color=${p => p.color};
`
export const PlayVideoDot = styled.span`
    width:20px;
`
export const PlaySocialButtonsContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
`
export const SocialButton = styled.button`
    border:none;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#2563eb;
    color:${p => p.color};
`
export const ButtonText = styled.span`
    color:#2563eb;
    @media (max-width:576px){
        display:none;
    }
`
export const HrLine = styled.hr`
    border:1px solid #909090;
`
export const ChannelContainer = styled.div`
    display:flex;
    align-items:flex-start;
`
export const ChannelImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius:50px;
`
export const ChannelInfo = styled.div`
    display:flex;
    flex-direction:column;
`
export const ChannelName = styled.div`
    color:${p => p.color};
`
export const ChannelSubscribers = styled.p`
    color:${p => p.color};
`
export const ChannelDescription = styled.p`
     color:${p => p.color};
`
export const BtnContainer = styled.div`
    display:flex;
    background:none;
`
