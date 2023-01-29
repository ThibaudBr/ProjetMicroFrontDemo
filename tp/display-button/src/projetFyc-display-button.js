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
      <div style={{display:"flex",flexDirection:"column",width:"100%",alignItems:"center",background:"white",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",padding:"5px",margin:"10px"}}>
        <div style={{textAlign: "center"}}>
          <img src={ticket[image].image} style={{maxHeight: "200px", width:"320px"}}/>
        </div>
        <div
            onClick={addToCart}
            style={{width: "130px",background:"#10657E",padding:"10px",margin:"10px",cursor:"pointer",borderRadius:"10px",color:"white",textAlign:"center"}}
        >
          Add To Cart
        </div>
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
