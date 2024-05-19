import "./App.css";
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InsightEdge from './pages/InsightEdge';

// function App() {
  
//   return (
//     <>
      
//     </>
//   );
// }

// export default App;



function App() {
 return (
    <>
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project-insight-edge" element={<InsightEdge />} />
       </Routes>
    </>
 );
};
export default App;
