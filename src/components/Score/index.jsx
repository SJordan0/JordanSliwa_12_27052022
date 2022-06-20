import styled from "styled-components"
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { USER_MAIN_DATA } from "../../Service/dataMocked";

const ScoreBar = styled.div`
    width: 32%;
    height: 263px;
    background: #FBFBFB;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
`

const ProgressBar = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    top: -170px;

    p{
        color: grey;
    }

    span{
        color: black;
        font-size: 26px;
    }
`

function Score() {
    return(
        <ScoreBar>
            <p>Score</p>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={256} height={256}>
                    <Pie 
                    data={USER_MAIN_DATA} 
                    dataKey="todayScore" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={55} 
                    fill="white" 
                    />
                    <Pie 
                    data={USER_MAIN_DATA} 
                    dataKey="todayScore" 
                    nameKey="Objectif" 
                    cx="50%" 
                    cy="50%" 
                    innerRadius={75} 
                    outerRadius={90} 
                    fill="#82ca9d" 
                    startAngle={180}
                    endAngle={130}
                    />
                </PieChart>
            </ResponsiveContainer>
            <ProgressBar>
                <p>
                    <span>{USER_MAIN_DATA[0].todayScore*100}%</span> <br />
                    de votre <br />
                    objectif
                </p>
            </ProgressBar>
        </ScoreBar>
    )
}

export default Score