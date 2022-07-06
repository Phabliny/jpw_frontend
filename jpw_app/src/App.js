import React, { useState } from 'react'
import Login from './components/Login'
import Body from './Body'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Termo from './components/Termo';


const App = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <Router>
            <Routes>
              <Route path="/token" element={<Login submitted={submitted} setSubmitted={setSubmitted}/>}></Route>
              <Route path="/" element={<Body />}></Route>
              <Route path="/termo" element={<Termo />}></Route>
            </Routes>
        </Router>
    </div>
  );
};

export default App;
