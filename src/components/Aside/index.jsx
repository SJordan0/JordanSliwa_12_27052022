import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo1 from '../../assets/méditation.png'
import logo2 from '../../assets/nage.png'
import logo3 from '../../assets/vélo.png'
import logo4 from '../../assets/haltère.png'

const Side = styled.aside`
    background-color: #020203;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    max-width: 848px;
    position: relative;
    top: -102px;
    transform-origin: bottom left;
    transform: rotate(90deg);
    
    p {
        color: white;
        transform: rotate(180deg);
    }

    img{
        transform: rotate(270deg);
        height: 64px;
        width: 64px;
    }

    a{
        margin-right: 20px;
    }
`

const Nav = styled.nav`
display:flex;
justify-content: flex-start;
`

function Aside() {
    return (
    <Side>
        <Nav>   
            <Link to="/">
                <img src={logo1} alt="méditation" />
            </Link>
            <Link to="/">
                <img src={logo2} alt="natation" />
            </Link>
            <Link to="/">
                <img src={logo3} alt="vélo" />
            </Link>
            <Link to="/">
                <img src={logo4} alt="haltère" />
            </Link>
        </Nav>
        <p>Copyright, SportSee 2020</p>
    </Side>
    )
}

export default Aside