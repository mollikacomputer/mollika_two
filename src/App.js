
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Menu/Nav';

import { publicRoute } from './Components/Route/publicRoute';

function App() {
  return (
    <div>
      <Nav />
  <Routes>
        {
          publicRoute.map(({path, Component}, index) =>(
            <Route
            key={index}
            path={path}
            element={<Component/>}
            />
            ))
        }
      </Routes>
    </div>
  );
}

export default App;
