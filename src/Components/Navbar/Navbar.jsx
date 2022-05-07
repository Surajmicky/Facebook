import React from 'react'
import {Nav} from "./Nav"
import { FirstDiv } from './Nav'
import "./Nav.css"
export const Navbar = () => {
  return (
      <>
      <Nav>
        <FirstDiv className="first">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png" alt="" />
            <input type="text" />
        </FirstDiv>
      </Nav>
      </>
    
  )
}
