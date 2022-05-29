import styled from 'styled-components'

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
        </Main>
    )
}

export default Home