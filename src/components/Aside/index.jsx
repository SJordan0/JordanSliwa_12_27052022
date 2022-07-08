import styled from 'styled-components'
import { Link } from 'react-router-dom'
import yoga from '../../assets/yoga.svg'
import nage from '../../assets/nage.svg'
import velo from '../../assets/vélo.svg'
import haltere from '../../assets/haltère.svg'

const Side = styled.aside`
    background-color: #020203;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    width: 680px;
    position: absolute;
    top: 0px;
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

function Aside() {
    return (
    <Side>
        <nav>   
            <Link to="/">
                <img src={yoga} alt="yoga" />
            </Link>
            <Link to="/">
                <img src={nage} alt="natation" />
            </Link>
            <Link to="/">
                <img src={velo} alt="vélo" />
            </Link>
            <Link to="/">
                <img src={haltere} alt="haltère" />
            </Link>
        </nav>
        <p>Copyright, SportSee 2020</p>
    </Side>
    )
}

export default Aside