import styled from 'styled-components'

export const LoginMainContainer = styled.div`
    background-color:${props => (props.dark === true ? '#0f0f0f' : '#ffffff')};
    height: 100vh;
    padding: 12px;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const FormContainer = styled.form`
    background-color:${props => (props.dark === true ? '#181818' : '#ffffff')};
    box-shadow:4px 4px 4px 4px lightgrey;
    border-radius: 10px;
    padding: 10px;
    display:flex;
    flex-direction:column;
    width: 400px;
`
export const Img = styled.img`
    width:150px;
    align-self:center;
`
export const InputCont = styled.div`
    margin-bottom: 10px;
    display:flex;
    flex-direction:${props => (props.check ? 'row' : 'column')};
`
export const Input = styled.input`
    outline:none;
    padding-left: 10px;
    border: 0.1px solid grey;
    border-radius:8px;
    height:45px;
    width: 100%;
    margin-top: 10px;
`
export const Button = styled.button`
    height: 40px;
    width:100%;
    background-color:blue;
    color:#ffffff;
    font-size:18px;
    outline:none;
    border:none;
    cursor:pointer;
    border-radius:10px;
`
export const ErrorMsg = styled.p`
    color:red;
`
