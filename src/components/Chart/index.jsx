import styled from "styled-components"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { USER_PERFORMANCE } from "../../Service/dataMocked";

const Graph = styled.div`
    width: 32%;
    height: 263px;
    background: #282D30;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
`

function Chart() {
    return(
        <Graph>
            <p>Graphique</p>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90} data={USER_PERFORMANCE[0].data}>
                    <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" />
                    <PolarGrid radialLines={false} polarRadius={[10, 20, 40, 65, 90]} />
                    <PolarAngleAxis dataKey="kind" tick={{ fill: 'white', fontSize: '12', dy: 0 }}/>
                    <PolarRadiusAxis />
                </RadarChart>
            </ResponsiveContainer>
        </Graph>
    )
}

export default Chart