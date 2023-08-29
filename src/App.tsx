import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mainpage from "./pages/Mainpage";
import BottomBar from "./components/Bottombar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Mainpage />}
          />
        </Routes>
        <BottomBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
