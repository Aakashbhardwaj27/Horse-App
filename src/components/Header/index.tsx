import React, { Dispatch } from 'react'
import Nav from 'react-bootstrap/Nav';
import { useDispatch } from 'react-redux';
import logo from 'assets/images/logo.png'
import { Logout } from 'redux/actions/actionCreators';
import './index.scss'
const Header = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const logOut=()=>{
    dispatch(Logout())
  }
  return (
  <Nav
    activeKey="/home"
    className='nav'
    onSelect={(selectedKey) => {selectedKey==="logout"&&logOut()}}
    >
      <Nav.Item>
      <Nav.Link href="/"><img src={logo} width={30} alt="Horse Meter" />Horse Meter</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="title" disabled >Race Status Display Screen</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="logout">Logout</Nav.Link>
      </Nav.Item>
      </Nav>
  )
}

export default Header