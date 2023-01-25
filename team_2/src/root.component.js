import Parcel from "single-spa-react/parcel";
import {
  Route,
  BrowserRouter, Routes
} from "react-router-dom";
import Tp from "./components/tp";
import DisplayAccueil from "./components/displayAccueil";

export default function Root(props) {
  return <div>
    <section>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/home" element={<DisplayAccueil/>}/>
          <Route path={"/tp"} element={<Tp/>}/>
        </Routes>
      </BrowserRouter>
      <Parcel
          config={() => System.import('@projectFyc/team3')}
          wrapWith="div"
      />
    </section>
  </div>;
}
