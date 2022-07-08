import styled from 'styled-components'
<<<<<<< Updated upstream
=======
import { Link } from 'react-router-dom'
>>>>>>> Stashed changes

const Main = styled.main`
    margin-left: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -100px;
    height: 580px;
`

function Home() {
    return(
        <Main>
            <h1> Bienvenue </h1>
<<<<<<< Updated upstream
=======
            <Link to="/"> Accueil</Link>
            <Link to={`/ProfilPage/12`}> User 12</Link>
            <Link to={`/ProfilPage/18`}> User 18</Link>
>>>>>>> Stashed changes
        </Main>
    )
}

export default Home