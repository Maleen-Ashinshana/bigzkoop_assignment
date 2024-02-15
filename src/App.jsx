
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./view/main.jsx";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: 'FETCH_POSTS_REQUESTED'})


    }, [dispatch]);

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
