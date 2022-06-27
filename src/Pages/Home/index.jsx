import styled from 'styled-components'
import { Link } from 'react-router-dom'
import React,{useState,useEffect} from 'react';
import {USER_MAIN_DATA} from'../../Service/dataMocked'

const Main = styled.main`
    margin-left: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    top: 200px;
`

function getAllUser() {
    const AllUser= []
    USER_MAIN_DATA.forEach((item) => {
        AllUser.push({
            id: item.id,
        })
    })
    return AllUser
}

function Home() {
    const[allUserData, setAllUserData] = useState([])

    useEffect(() => {
        setAllUserData(getAllUser())
    }, [])

    return(
        <Main>
            <h1> Bienvenue </h1>
            <Link to="/"> Accueil</Link>
            {allUserData.map((item) => (
                <Link to={`/ProfilPage/${item.id}`}> User {item.id}</Link>
            ))}
        </Main>
    )
}

export default Home