import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mainpage from "./pages";

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
      </BrowserRouter>
    </div>
  );
}

export default App;
