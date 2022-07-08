import styled from "styled-components"
import calories from '../../assets/calories.svg'
import proteines from '../../assets/proteines.svg'
import glucides from '../../assets/glucides.svg' 
import lipides from '../../assets/lipides.svg'
import PropTypes from 'prop-types'; 

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
    p{
        font-size: 14px;
        color: #74798C;
    }
    img{
        margin-left: 20px;
    }
    h2{
        font-size: 20px;
        font-weight: 700;
    }
`

const StatText = styled.div`
    margin-left: 15px;
`


/**
 * Stats component, display the stats of the user
 * @prop {object} userStats stats data
 * @returns {React.ReactComponentElement} 
 */

function Stats({userStats}) {
    return(
        <StatsList>
            <Stat>
                <img src={calories} alt=''/>
                <StatText>
                    <h2>{userStats?.calorieCount}Kcal</h2>
                    <p>Calories</p>         
                </StatText>
            </Stat>
            <Stat>
                <img src={proteines} alt=''/>
                <StatText>
                    <h2>{userStats?.proteinCount}g</h2>
                    <p>Proteines</p>
                </StatText>
            </Stat>
            <Stat>
                <img src={glucides} alt=''/>
                <StatText>
                    <h2>{userStats?.carbohydrateCount}g</h2>
                    <p>Glucides</p>
                </StatText>
            </Stat>
            <Stat>
                <img src={lipides} alt=''/>
                <StatText>
                    <h2>{userStats?.lipidCount}g</h2>
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