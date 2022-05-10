import React from 'react'
import "./Nav.css"
import {Nav} from "./Nav"
import { FirstDiv,SecondDiv,ThirdDiv } from './Nav'

export const Navbar = () => {
  return (
      <>
      <Nav className="nav">
        <FirstDiv className="first">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png" alt="" />
            <input type="text" />
        </FirstDiv>
        <SecondDiv>

        </SecondDiv>
        <ThirdDiv/>
      </Nav>
      </>
    
  )
}
