import React from 'react';
import ReactDOM from 'react-dom';
import oPack from './generated/_opackx';


let highPrecisionTime = () => performance.timeOrigin + performance.now();
oPack.setEditorProfiler(highPrecisionTime, () => {});
oPack.connect();

function EngineUI() {
    let root = oPack.evalRoot();
    
    if (root === undefined)
        throw new Error("The ouptut of the graph 'Main' is undefined")

    if (!React.isValidElement(root))
        return <p>{JSON.stringify(root, null, 2)}</p>
    
    return React.cloneElement(root, {});
}

oPack.onReady(() => {
    ReactDOM.render(
        <React.StrictMode>
            <EngineUI />
        </React.StrictMode>,
        document.getElementById('root')
    );
});

const reportWebVitals = onPerfEntry => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};

reportWebVitals(console.log);