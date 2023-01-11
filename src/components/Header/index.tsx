import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'

import { Container } from './styles'

import logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <Container>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </Container>
  )
}
