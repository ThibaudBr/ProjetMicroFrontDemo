import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import ticket from 'home/ticket';
import storeActions from 'storeActions/storeActions';

export default function Root(props) {
    const [image, setImage] = React.useState(0);

    storeActions.subscribe(() => {
        setImage(storeActions.image);
    });


  const addToCart = () => {
      storeActions.incrementCount();
  };

  return (
      <div>
        <div style={{textAlign: "center"}}>
          <img src={ticket[image].image} style={{maxHeight: "200px"}}/>
        </div>
        <button
            onClick={addToCart}
            style={{width: "100%"}}
        >
          Add To Cart
        </button>
      </div>
  );
}


const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
  },
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
