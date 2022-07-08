import styled from "styled-components"
import calories from '../../assets/calories.svg'
import proteines from '../../assets/proteines.svg'
import glucides from '../../assets/glucides.svg' 
import lipides from '../../assets/lipides.svg'
<<<<<<< Updated upstream
import { USER_MAIN_DATA } from "../../Service/dataMocked"
=======
import PropTypes from 'prop-types'; 
>>>>>>> Stashed changes

const StatsList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 23%;
`

const Stat = styled.div`
    background-color: #FBFBFB;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
    height: 21%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    p{
        font-size: 14px;
        color: #74798C;
    }

    h2{
        font-size: 20px;
        font-weight: 700;
    }
`

const StatText = styled.div`
    margin-left: 15px;
`

<<<<<<< Updated upstream
function Stats() {
=======
/**
 * Stats component, display the stats of the user
 * @prop {object} userStats stats data
 * @returns {React.ReactComponentElement} 
 */

function Stats({userStats}) {
>>>>>>> Stashed changes
    return(
        <StatsList>
            <Stat>
                <img src={calories} alt=''/>
                <StatText>
<<<<<<< Updated upstream
                    <h2>{USER_MAIN_DATA[0].keyData.calorieCount}Kcal</h2>
=======
                    <h2>{userStats?.calorieCount}Kcal</h2>
>>>>>>> Stashed changes
                    <p>Calories</p>         
                </StatText>
            </Stat>
            <Stat>
                <img src={proteines} alt=''/>
                <StatText>
<<<<<<< Updated upstream
                    <h2>{USER_MAIN_DATA[0].keyData.proteinCount}g</h2>
=======
                    <h2>{userStats?.proteinCount}g</h2>
>>>>>>> Stashed changes
                    <p>Proteines</p>
                </StatText>
            </Stat>
            <Stat>
                <img src={glucides} alt=''/>
                <StatText>
<<<<<<< Updated upstream
                    <h2>{USER_MAIN_DATA[0].keyData.carbohydrateCount}g</h2>
=======
                    <h2>{userStats?.carbohydrateCount}g</h2>
>>>>>>> Stashed changes
                    <p>Glucides</p>
                </StatText>
            </Stat>
            <Stat>
                <img src={lipides} alt=''/>
                <StatText>
<<<<<<< Updated upstream
                    <h2>{USER_MAIN_DATA[0].keyData.lipidCount}g</h2>
=======
                    <h2>{userStats?.lipidCount}g</h2>
>>>>>>> Stashed changes
                    <p>Lipides</p>
                </StatText>
            </Stat>
        </StatsList>
    )
}

export default Stats

Stats.propTypes = {
    userStats: PropTypes.object,
  }