import styled from "styled-components"
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
<<<<<<< Updated upstream
import { USER_MAIN_DATA } from "../../Service/dataMocked";
=======
import PropTypes from 'prop-types'; 
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
function Score() {
=======
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
      
>>>>>>> Stashed changes
    return(
        <ScoreBar>
            <p>Score</p>
            <ResponsiveContainer width="100%" height="100%">
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
                    />
                </PieChart>
            </ResponsiveContainer>
            <ProgressBar>
                <p>
<<<<<<< Updated upstream
                    <span>{USER_MAIN_DATA[0].todayScore*100}%</span> <br />
=======
                    <span>{data*100}%</span> <br />
>>>>>>> Stashed changes
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