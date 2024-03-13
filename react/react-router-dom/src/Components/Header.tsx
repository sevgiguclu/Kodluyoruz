import { Link,useNavigate } from "react-router-dom"
// useNagivate is a hook in the react-router-dom library

function Header() {
  const navigate = useNavigate();

  return (
    <header>
        <ul className="header_list">
            <li><a href="/">Logo</a></li>{/* If "a" is used instead of link, the page will be re-rendered */}
            <li><Link to="/">Ana Sayfa</Link></li>
            <li onClick={() => navigate("aboutus")}><a href="">Hakkımızda</a></li>
            <li><Link to="/users">Kullanıcılar</Link></li>
            <li><Link to="/contact">İletişim</Link></li>
            <li onClick={() => navigate(-1)}>Geri</li>
        </ul>
    </header>
  )
}

export default Header