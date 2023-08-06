import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import PNRStatus from "./Components/PNR Status/PNRStatus";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Homepage />}/>
        <Route path="pnr" element={<PNRStatus />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
