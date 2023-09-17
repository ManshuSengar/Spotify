import './player.css'
import { PlayCircleFilled, StepForwardFilled, StepBackwardFilled, RedoOutlined, RetweetOutlined } from '@ant-design/icons'
const Player = () => {
    return (
        <div className="player-wrapper">
            <div className="player-song">

            </div>
            <div className="player-container">
                <div className="player-controls">
                    <RetweetOutlined style={{
                        fontSize: 25,
                        color: "#888",
                        cursor: "pointer"
                    }} />
                    <StepBackwardFilled style={{
                        fontSize: 25,
                        color: "#888",
                        cursor: "pointer"

                    }} />
                    <PlayCircleFilled style={{
                        fontSize: 35,
                        cursor: "pointer"

                    }} />
                    <StepForwardFilled style={{
                        fontSize: 25,
                        color: "#888",
                        cursor: "pointer"

                    }} />
                    <RedoOutlined style={{
                        fontSize: 25,
                        color: "#888",
                        cursor: "pointer"
                    }} />
                </div>
                <div className="player-track-container" data-start-value="0:13" data-end-value='4:09'>
                    <div className="player-progress"></div>
                </div>
            </div>
            <div className="player-extra-controls">

            </div>
        </div>
    )
}

export default Player