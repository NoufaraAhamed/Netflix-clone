import React from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {Originals,Action,Comedy,Romance,Horror,Documentaries} from './constants/urls'
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={Originals} title='Netflix Originals' isLarge />
     <RowPost url={Action} title='Action'  />
     <RowPost url={Comedy} title='Comedy'  />
     <RowPost url={Romance} title='Romance' />
     <RowPost url={Horror} title='Horror' />
     <RowPost url={Documentaries} title='Documentaries' />
    </div>
  );
}

export default App;
