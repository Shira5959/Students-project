import { NavLink } from 'react-router-dom'

function Sidebar() {
  const activeStyle = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? '#4f46e5' : 'black',
  })

  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end style={activeStyle}>דשבורד</NavLink>
          </li>
          <li>
            <NavLink to="/students" style={activeStyle}>כל התלמידות</NavLink>
          </li>
          <li>
            <NavLink to="/excellent" style={activeStyle}>תלמידות מצטיינות</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar