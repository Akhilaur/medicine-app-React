
import Navbar from './components/Navbar';
import AddMedicine from './components/Medistore/AddMedicine';
import MedicineListItem from './components/Medistore/MedicineListItem';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <Listmedicine/>
       <AddMedicine/>
       <MedicineListItem/>
       
      
       
        
      </div>
    </div>
  );
}

export default App;
