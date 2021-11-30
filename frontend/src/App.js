import './App.css';
import { Box } from "@chakra-ui/react"
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Upload from './components/Upload';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <Router>
      <Box p={10}>
        <Navbar/>
        <Box>
          <Routes>
            <Route exact path="/" element={<Feed/>}/>
            <Route path="/upload" element={<Upload/>}/>
          </Routes>
        </Box>
      </Box>
    </Router>

  );
}

export default App;
