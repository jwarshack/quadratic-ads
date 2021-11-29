import './App.css';
import { Box, Text} from "@chakra-ui/react"
import Navbar from './components/Navbar';
import AdContainer from './components/AdContainer';



function App() {
  return (
    <Box p={10}>
      <Navbar/>
      <AdContainer/>
    </Box>
  );
}

export default App;
