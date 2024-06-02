import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LogoLink = styled(Link)`
    text-decoration:none;
`
export const NavbarHeader = styled.nav`
    position:fixed;
    top:0;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding:10px;
    height:60px;
    width: 100%;
    background-color:${props => props.bgColor};
    @media (min-width:768px){
        padding-left:30px;
        padding-right:30px
    }
`
export const HeaderLogo = styled.img`
    width:80px;
    height:30px;
    @media (min-width:768px){
        width:100px;
        height:40px;
    }
`
export const ActionContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
`
export const ThemeButton = styled.button`
    background:none;
    border:none;
    margin-right: 10px;
`
export const LogoutButton = styled.button`
    border: 1px;
    padding:5px 10px 5px 10px;
    background-color:${props => props.bgColor};
    color:${props => props.color};
    border-color:${p => p.color}
    margin-left:6px;
    @media (max-width:768px) {
        display:none
    } 
`
export const LogoutIconButton = styled.button`
    background:none;
    border:none;
    @media (min-width:768px) {
        display:none;
    }
`
export const ProfileImage = styled.img`
    width:30px;
    height:30px;
    margin-right: 30px;
`
export const ModalContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:150px;
    width:250px;
    background-color:#cbd5e1;
    border-radius:10px;
    padding:20px;
    @media (min-width:768px) {
        heigth:200px;
        wwidth:400px;
    }
`
export const CloseButton = styled.button`
    background-color:transparent;
    border:1px solid grey;
    padding: 8px;
    color:grey;
    margin:12px;
    cursor:pointer;
`
export const ConfirmButton = styled.button`
    align-self:flex-end;
    background-color: #3b82f6;
    color:white;
    padding: 8px;
    cursor:pointer;

`
export const ModalDesc = styled.p`
    font-size:15px;
    color:black;
    text-align:center;
`
export const ButtonContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`
