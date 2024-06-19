import "./App.css";
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import InsightEdge from './pages/InsightEdge';
import PrisonerExpress from "./pages/PrisonerExpress";
import MSCourseReg from "./pages/MSCourseReg";
import BeautyAi from "./pages/BeautyAi";
import { Analytics } from "@vercel/analytics/react"

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
          <Route path="/project-ms-course" element={<MSCourseReg />} />
          <Route path="/project-beauty-ai" element={<BeautyAi />} />
       </Routes>
       <Analytics />
    </>
 );
};
export default App;
