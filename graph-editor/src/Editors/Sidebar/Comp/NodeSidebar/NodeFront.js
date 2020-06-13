import React from 'react';
import UI from '../../../../UI';


function Node(props) {
    return (
        <UI.Foldout label="JavaScript Properties">
            <UI.PortsEditor k="inputs" nodeKey={props.nodeKey} typeOptions={["back", "front", "data"]} graphId={props.graphId} />
        </UI.Foldout>
    );
}


export default Node;
