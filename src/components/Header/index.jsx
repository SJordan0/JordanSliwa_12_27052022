import logo from '../../assets/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Banner = styled.header`
background-color: #020203;
display: flex;
justify-content: center;
padding: 10px 0;
height: 91px;
`

const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
width: 95%;
img {
    height: 60px;
}
a{
        color: white;
        font-size: 24px;
}
`

function Header() {
return (
    <Banner>
        <Nav>
            <img src={logo} alt="logo" />
            <Link to="/" >Accueil</Link>
            <Link to="/">Profil</Link>
            <Link to="/">Réglage</Link>
            <Link to="/">Communauté</Link>
        </Nav>
    </Banner>
    );
}

export default Header