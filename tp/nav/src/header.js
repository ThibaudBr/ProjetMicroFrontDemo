import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import storeActions from 'storeActions/storeActions';

const Header = () => {
    const [count, setCount] = useState(storeActions.count);
    useEffect(() => {
        storeActions.subscribe(() => {
            setCount(storeActions.count);
        });
    }, []);
    return (
        <div className="mui-appbar mui--appbar-line-height">
            <table width="100%">
                <tbody>
                <tr style={{ verticalAlign: 'middle' }}>
                    <td
                        className="mui--appbar-height mui--text-display1"
                        style={{ paddingLeft: '1em' }}
                    >
                        FYC Micro Frontends
                    </td>
                    <td
                        className="mui--appbar-height mui--text-display1"
                        align="right"
                        style={{ paddingRight: '1em' }}
                    >
                        Cart Count - {count}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

const headerLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Header,
    errorBoundary(err, info, props) {
        // Customize the root error boundary for your microfrontend here.
    },
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;
