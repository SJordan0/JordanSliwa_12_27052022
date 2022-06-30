import styled from "styled-components"
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const ScoreBar = styled.div`
    width: 32%;
    height: 218px;
    background: #FBFBFB;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
    position: relative;
    
    h2{
        font-size: 18px;
        position: absolute;
        left: 15px;
        top: 15px;
    }
`

const ProgressBar = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 145px;

    p{
        color: grey;
    }

    span{
        color: black;
        font-size: 26px;
    }
`

function Score({userScore}) {
    return(
        <ScoreBar>
            <h2>Score</h2>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie 
                    data={userScore} 
                    dataKey="todayScore" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={55} 
                    fill="white" 
                    />
                    <Pie 
                    data={userScore} 
                    dataKey="todayScore" 
                    nameKey="Objectif" 
                    cx="50%" 
                    cy="50%" 
                    innerRadius={75} 
                    outerRadius={90} 
                    cornerRadius={10}
                    fill="#FF0000" 
                    startAngle={180}
                    endAngle={130}
                    />
                </PieChart>
            </ResponsiveContainer>
            <ProgressBar>
                <p>
                    <span>{userScore*100}%</span> <br />
                    de votre <br />
                    objectif
                </p>
            </ProgressBar>
        </ScoreBar>
    )
}

export default Score