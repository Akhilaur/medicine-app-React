import { createBrowserRouter } from "react-router-dom";
import Register from "./components/auth/register";
import Login from "./components/auth/Login";
import AddMedicine from "./components/Medistore/AddMedicine";
import ViewMedicine from "./components/Medistore/ViewMedicine";
import EditMedicine from "./components/Medistore/EditMedicine";
import Home from "./components/Medistore/Home";
import Medicines from "./components/Medistore/Medicines";

const router = createBrowserRouter([
  { path: '/', element: < Login/> }, 
  { path: 'Medistore/data/create', element: <AddMedicine /> },
  { path: 'Medistore/data/:medId', element: <ViewMedicine /> },
  { path: 'Medistore/data/:medId/edit', element: <EditMedicine /> },
  { path: 'Medistore/data/Home',  element: <Home /> },
  { path: 'register', element: <Register /> },
  { path: 'login', element: <Login /> },
  {path:'Medistore/data/Medicines',element: <Medicines />}
  
  
]);

export default router;