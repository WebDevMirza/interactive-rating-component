import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardRating from "./compo/CardRating";
import CardSuccess from "./compo/CardSuccess";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<CardRating />} />
          <Route path="/success/" element={<CardSuccess />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
