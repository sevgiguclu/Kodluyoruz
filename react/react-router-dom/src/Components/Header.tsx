import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
        <ul className="header_list">
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/users">Kullanıcılar</Link></li>
            <li><Link to="/contact">İletişim</Link></li>
        </ul>
    </header>
  )
}

export default Header