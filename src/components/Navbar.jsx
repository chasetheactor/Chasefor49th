import { NavLink } from 'react-router-dom'
import './Navbar.css'

const navItems = [
  { title: 'HOME', path: '/' },
  { title: 'WHO I AM?', path: '/bio' },
  { title: 'ROYAL COURT', path: '/initiatives' },
  { title: 'WHY ME?', path: '/why-me' },
]

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `navbar-link ${isActive ? 'active' : ''}`
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
