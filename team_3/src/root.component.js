import {
    Route,
    BrowserRouter, Routes
} from "react-router-dom";
import ButtonTeam3 from "./components/buttonTeam3";
import Tp from "./components/Tp";

export default function Root(props) {
  return (
      <section>
        <BrowserRouter basename="/ho">
          <Routes>
            <Route path="/home" element={<ButtonTeam3/>}/>
            <Route path={"/tp"} element={<Tp/>}/>
          </Routes>
        </BrowserRouter>
      </section>
  );}
