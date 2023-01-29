import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import ticket from 'home/ticket';

const Footer = () => {

    const [nbPhoto, setNbPhoto] = useState(ticket.length);

    return (
        <div className="mui-appbar mui--appbar-line-height">
            <table width="100%">
                <tbody>
                <tr style={{verticalAlign: 'middle'}}>
                    <td
                        className="mui--appbar-height mui--text-display1"
                        style={{paddingLeft: '1em'}}
                    >
                        Footer
                    </td>
                    <td
                        className="mui--appbar-height mui--text-display1"
                        align="right"
                        style={{ paddingRight: '1em' }}
                    >
                        Photos - {nbPhoto}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

const footerLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Footer
});

export const bootstrap = footerLifecycles.bootstrap;
export const mount = footerLifecycles.mount;
export const unmount = footerLifecycles.unmount;
