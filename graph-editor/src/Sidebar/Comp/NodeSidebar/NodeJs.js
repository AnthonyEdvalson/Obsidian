import React from 'react';
import UI from '../../../UI';


function Node(props) {
    return (
        <UI.Foldout label="JavaScript Properties">
            <UI.PortsEditor k="inputs" nodeKey={props.nodeKey} typeOptions={["py", "js", "data"]} />
        </UI.Foldout>
    );
}


export default Node;
