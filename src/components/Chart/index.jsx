import styled from "styled-components"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { renameChart } from "../../models";
import PropTypes from 'prop-types'; 

const Graph = styled.div`
    width: 32%;
    height: 218px;
    background: #282D30;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
`

/**
 * Performance component, display performance of the user
 * @prop {array} userPerformance performance data
 * @returns {React.ReactComponentElement}
 */
function Chart({userPerformance}) {
    return(
        <Graph>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={65} data={userPerformance}>
                    <Radar dataKey="value" fill="#FF0101B2" />
                    <PolarGrid radialLines={false} polarRadius={[5, 15, 35, 50, 65]} />
                    <PolarAngleAxis dataKey="kind" tickFormatter={renameChart()} tick={{ fill: 'white', fontSize: '11', dy: 0 }} />
                </RadarChart>
            </ResponsiveContainer>
        </Graph>
    )
}

export default Chart

Chart.propTypes = {
    userPerformance: PropTypes.array,
}