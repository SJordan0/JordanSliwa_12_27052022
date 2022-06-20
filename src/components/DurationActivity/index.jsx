import styled from "styled-components"
import { USER_AVERAGE_SESSIONS } from "../../Service/dataMocked"
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const Duration = styled.div`
    width: 32%;
    height: 263px;
    background: #FF0000;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
`

function DurationActivity(){
    return(
        <Duration>
            <p>Durée</p>
            <ResponsiveContainer width="100%" height={240}>
                <LineChart width={300} height={100} data={USER_AVERAGE_SESSIONS[0].sessions}>
                <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </Duration>
    )
}

export default DurationActivity