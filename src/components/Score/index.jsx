import styled from "styled-components"
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'; 

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

/**
 * Score component, display the score of the user
 * @prop {number} userScore Score data 
 * @returns {React.ReactComponentElement} 
 */

function Score({userScore}) {
    const data = userScore;
      const pieData = [
        { name: "completed", value: data, fill: "#FF0000"},
        { name: "not-completed", value: 1 - data, fill: "transparent" },
      ];
      
    return(
        <ScoreBar>
            <h2>Score</h2>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                <circle cx="50%" cy="50%" fill="white" r="50"></circle>
                    <Pie 
                    data={pieData}
                    dataKey="value" 
                    nameKey="Objectif" 
                    cx="50%" 
                    cy="50%" 
                    innerRadius={60} 
                    outerRadius={75} 
                    cornerRadius={10} 
                    startAngle={90}
                    endAngle={450} 
                    />
                </PieChart>
            </ResponsiveContainer>
            <ProgressBar>
                <p>
                    <span>{data*100}%</span> <br />
                    de votre <br />
                    objectif
                </p>
            </ProgressBar>
        </ScoreBar>
    )
}

export default Score

Score.propTypes = {
    userScore: PropTypes.number,
  }