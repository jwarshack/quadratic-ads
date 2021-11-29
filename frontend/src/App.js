import './App.css';
import { Box } from "@chakra-ui/react"
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Ads from './components/Ads';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <Router>
      <Box p={10}>
        <Navbar/>
        <Box>
          <Routes>
            <Route exact path="/" element={<Showcase/>}/>
            <Route path="/ads" element={<Ads/>}/>
          </Routes>
        </Box>
      </Box>
    </Router>

  );
}

export default App;
