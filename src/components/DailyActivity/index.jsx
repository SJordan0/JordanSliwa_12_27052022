import styled from "styled-components"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'; 

const Daily = styled.div`
    width: 100%;
    background: #FBFBFB;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
    margin-bottom: 30px;
    p{
        padding: 15px;
    }
    .recharts-default-legend{
        display: flex;
        justify-content: flex-end;
        position: relative;
        bottom: 295px;
    }
`



/** 
 * Daily activity component, display daily activity of the user
 * @prop {array} userDaily daily activity data
 * @returns {React.ReactComponentElement}
 */

function DailyActivity({userDaily}) {
    return(
        <Daily>
            <p>Activité quotidienne</p>
            <ResponsiveContainer width="92%" height={280}>
                    <BarChart
                    width="92%"
                    height={300}
                    data={userDaily}
                    margin={{left: 15}}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis 
                        dataKey="calories"
                        orientation="right"
                        tickCount={3}
                        axisLine={false}
                        tickLine={false}
                        tickMargin={5}
                    />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="kilogram" name="Poids (kg)" fill="black" barSize={7} radius={[3, 3, 0, 0]} />
                    <Bar dataKey="calories" name="Calories brûlées (kCal)" fill="red" barSize={7} radius={[3, 3, 0, 0]}/>
                    </BarChart>
                </ResponsiveContainer>
        </Daily>
    )
}

export default DailyActivity

DailyActivity.propTypes = {
    userDaily: PropTypes.array,
  }