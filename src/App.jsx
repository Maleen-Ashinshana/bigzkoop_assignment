
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./view/main.jsx";
function App() {


  return (
    <>
      <div>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Main/>}></Route>
          </Routes>
      </BrowserRouter>
      </div>

    </>
  )
}

export default App
