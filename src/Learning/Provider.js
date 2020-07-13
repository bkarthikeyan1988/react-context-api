import React, { useState } from 'react';

import MissionContext from "./Context";;

const Provider = props => {
    const [mission, setMission] = useState({
        missionName: 'Yoda Mission',
        agentNumber: '007',
        option: 'Not Accepted'
    });

    return (
        <MissionContext.Provider
            value={{
                data: mission,
                isMissionAcception: () => {
                    setMission({...mission, option: "Accepted"})
                }
            }}
        >
            {props.children}
        </MissionContext.Provider>
    )
}

export default Provider;
