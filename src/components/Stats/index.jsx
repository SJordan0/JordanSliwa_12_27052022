import styled from "styled-components"
import calories from '../../assets/calories.svg'
import proteines from '../../assets/proteines.svg'
import glucides from '../../assets/glucides.svg' 
import lipides from '../../assets/lipides.svg'
import { USER_MAIN_DATA } from "../../Service/dataMocked"

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

function Stats() {
    return(
        <StatsList>
            <Stat>
                <img src={calories} alt=''/>
                <StatText>
                    <h2>{USER_MAIN_DATA[0].keyData.calorieCount}Kcal</h2>
                    <p>Calories</p>         
                </StatText>
            </Stat>
            <Stat>
                <img src={proteines} alt=''/>
                <StatText>
                    <h2>{USER_MAIN_DATA[0].keyData.proteinCount}g</h2>
                    <p>Proteines</p>
                </StatText>
            </Stat>
            <Stat>
                <img src={glucides} alt=''/>
                <StatText>
                    <h2>{USER_MAIN_DATA[0].keyData.carbohydrateCount}g</h2>
                    <p>Glucides</p>
                </StatText>
            </Stat>
            <Stat>
                <img src={lipides} alt=''/>
                <StatText>
                    <h2>{USER_MAIN_DATA[0].keyData.lipidCount}g</h2>
                    <p>Lipides</p>
                </StatText>
            </Stat>
        </StatsList>
    )
}

export default Stats