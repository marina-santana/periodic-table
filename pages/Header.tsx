import React from 'react'
import { Container } from "./styles/header";
import { ToggleSwitch } from "./component/Switch";

function Header() {
  return (
  <Container>
    <h1>Periodic Table</h1>
    <div>
      <span>☀️</span>
      <ToggleSwitch/>
      <span>🌙</span>
    </div>
  </Container>)
}

export default Header