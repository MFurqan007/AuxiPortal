import './App.css';
import Box from "./BoxComponent.js"
import PrintingDashboard from "./PrintingComponent.js"
import { useSelector } from "react-redux";
function App() {
  
  const nextpage = useSelector(state => state.flags.isloggedin);
  return (
    <div className= "dashboard">
      { nextpage ?
        <PrintingDashboard/>
        :
        <Box/>
      }
      
    </div>    
  );
}

export default App;
