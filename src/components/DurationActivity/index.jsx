import styled from "styled-components"
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { renameAverage } from "../../models";
import PropTypes from 'prop-types'; 


const Duration = styled.div`
    width: 32%;
    height: 217px;
    background: #FF0000;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
    position: relative;
    p {
        color: white;
        opacity: 0.5;
        font-size: 15px;
        position: absolute;
        left: 10%;
        top: 10%;
        width: 70%;
      }
`



/**
 * Duration activity component, display the duration of activity of the user
 * @prop {array} userDuration duration of activity data
 * @returns {React.ReactComponentElement}
 */

function DurationActivity({userDuration}){
    return(
        <Duration>
            <p>Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" height="100%" className="duration">
                <LineChart 
                data={userDuration} 
                margin={{ top: 0, right: 0, left: 5, bottom: 0 }}
                onMouseMove={(e) => {
                    if (e.isTooltipActive === true) {
                      let div = document.querySelector('.duration');
                      let windowWidth = div.clientWidth;
                      let mouseXpercentage = Math.round(
                        (e.activeCoordinate.x / windowWidth) * 100
                      );
                      div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
                    }
                  }}
                  >
                <Tooltip content={<CustomTooltip />} />
                <XAxis
                    dataKey="day"
                    stroke="#ffffff"
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={renameAverage()}
                />
                <YAxis
                    dataKey="sessionLength"
                    hide={true}
                    type="number"
                    domain={['dataMin -15', 'dataMax + 45']}
                />
                <Line type="natural" dataKey="sessionLength" name="Durée (min)" stroke="white" dot={false} strokeWidth={2}  />
                </LineChart>
            </ResponsiveContainer>
        </Duration>
    )
}

DurationActivity.propTypes = {
  userDuration: PropTypes.array,
}

const CustomTool = styled.div`
    width: 70px;
    height: 30px;
    background-color: black;
`

/** 
 * Custom tooltip component, customisation of the tooltip
 * @prop {Boolean} active
 * @prop {Array} payload
 * @return {React.ReactComponentElement}
 */

function CustomTooltip({ active, payload }) {
    return (
      active && (
        <CustomTool>
          <p> {`${payload[0].value} min`}</p>
        </CustomTool>
      )
    );
  }

export default DurationActivity

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}