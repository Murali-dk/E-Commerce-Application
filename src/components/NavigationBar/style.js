import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
    display:flex;
`
export const NavigationLgContainer = styled.div`
    display:flex;
    flex-direction:none;
    justify-content:space-between;
    width:250px;
    height:92%;
    position:fixed;
    top:60px;
    background-color:${props => props.bgColor};
    @media (max-width: 768px) {
        display:none;
    }
`
export const NavOptions = styled.ul`
    display:flex;
    flex-direction:column;
    flex-grow:1;
    list-style:none;
    padding:0px;
    margin-top:0px;
`
export const NavLink = styled(Link)`
    text-decoration:none;
`
export const NavLinkContainer = styled.li`
    display:flex;
    flex-direction: row;
    align-items:center;
    background-color:${p => p.bgColor};
    padding-left:20px;
`
export const NavText = styled.p`
    color:${p => p.color};
`
export const ContactInfo = styled.div`
    display:flex;
    flex-direction:column;
    padding:left:20px;
`
export const ContactHeading = styled.p`
    color:${p => p.color};
`
export const ContactIcons = styled.div`
    display:flex;
    align-items:center;
`
export const ContactImage = styled.img`
    height:25px;
    width:25px;
    border-radius:50px;
    margin-right:10px;
`
export const ContactNote = styled.p`
   color:${p => p.color};
`
export const NavigationSmallContainer = styled.nav`
    display:flex;
    width: 100%;
    height:60px;
    justify-content:space-between;
    padding: 10px;
    background-color: ${p => p.bgColor};
    position:fixed;
    bottom:0;
    align-items: center;
    @media (min-width:768px){
        display:none;
    }
`
