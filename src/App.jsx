import "./App.css";
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import InsightEdge from './pages/InsightEdge';
import PrisonerExpress from "./pages/PrisonerExpress";

// function App() {
  
//   return (
//     <>
      
//     </>
//   );
// }

// export default App;



function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
 return (
    <>
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project-insight-edge" element={<InsightEdge />} />
          <Route path="/project-prisoner-express" element={<PrisonerExpress />} />
       </Routes>
    </>
 );
};
export default App;
