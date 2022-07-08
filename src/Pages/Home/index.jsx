import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Main = styled.main`
    margin-left: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    top: 200px;
`

function Home() {
    return(
        <Main>
            <h1> Bienvenue </h1>
            <Link to="/"> Accueil</Link>
            <Link to={`/ProfilPage/12`}> User 12</Link>
            <Link to={`/ProfilPage/18`}> User 18</Link>
        </Main>
    )
}

export default Home