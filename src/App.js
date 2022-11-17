import React from "react";
import Routing from "./Routing";
import { BrowserRouter as Router} from 'react-router-dom';
import Header from "./pages/Header";




function App() {
  return (
    <Router>
      {/* <Routing/> */}
      <Header/>
    </Router>
  );
}

export default App;