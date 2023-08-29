import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mainpage from "./pages/Mainpage";
import BottomBar from "./components/Bottombar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
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
