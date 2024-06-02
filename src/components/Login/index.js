import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginMainContainer,
  FormContainer,
  Img,
  InputCont,
  Input,
  Button,
  ErrorMsg,
} from './style'

class Login extends Component {
  state = {
    isDark: false,
    userName: '',
    userPassword: '',
    checked: false,
    errMsg: '',
  }

  nameInput = event => {
    this.setState({userName: event.target.value})
  }

  passwordInput = event => {
    this.setState({userPassword: event.target.value})
  }

  showPassword = () => {
    this.setState(prevState => ({checked: !prevState.checked}))
  }

  setCookeisInToken = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    const {history} = this.props
    history.replace('/')
  }

  loginForm = async event => {
    event.preventDefault()
    const {userName, userPassword} = this.state
    const userDetails = {username: userName, password: userPassword}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    this.setState({userName: '', userPassword: ''})
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.setCookeisInToken(data.jwt_token)
    } else {
      this.setState({errMsg: data.error_msg})
    }
  }

  render() {
    const {isDark, userName, userPassword, checked, errMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginMainContainer dark={isDark}>
        <FormContainer dark={isDark} onSubmit={this.loginForm}>
          <Img
            alt="nxt watch logo"
            src={
              isDark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
          />
          <InputCont>
            <label htmlFor="userName">USER NAME</label>
            <Input
              onChange={this.nameInput}
              value={userName}
              type="name"
              placeholder="Usename"
            />
          </InputCont>
          <InputCont>
            <label htmlFor="password">Password</label>
            <Input
              value={userPassword}
              type={checked === true ? 'text' : 'password'}
              placeholder="Password"
              onChange={this.passwordInput}
            />
          </InputCont>
          <InputCont check>
            <input onChange={this.showPassword} id="check" type="checkbox" />
            <label htmlFor="check" value={userPassword}>
              Show Password
            </label>
          </InputCont>
          <Button type="submit">Login</Button>
          {errMsg !== '' ? <ErrorMsg>*{errMsg}</ErrorMsg> : null}
        </FormContainer>
      </LoginMainContainer>
    )
  }
}

export default Login
