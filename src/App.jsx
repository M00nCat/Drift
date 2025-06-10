import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Regulations from './components/Regulations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regulations" element={<Regulations />} />
      </Routes>
    </Router>
  );
}

export default App;