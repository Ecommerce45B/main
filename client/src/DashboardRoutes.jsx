import { Routes,Route } from "react-router-dom"
import AdminUsers from "./Components/pages/Dashboard/AdminUser/AdminUsers"
import CreateCategory from "./Components/pages/Dashboard/Creation/CreateCategory"
import CreateProduct from "./Components/pages/Dashboard/Creation/CreateProduct"
import HomeDashboard from "./Components/pages/Dashboard/HomeDashboard/HomeDashboard"
import ModificationProduct from "./Components/pages/Dashboard/Modification/ModificationProduct"
import CreateFabricante from "./Components/pages/Dashboard/Creation/CreateFabricante"
import CreateMarca from "./Components/pages/Dashboard/Creation/CreateMarca"


const DashboardRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<AdminUsers />} />
        <Route path="/creationCategory" element={<CreateCategory />} />
        <Route path="/creationProduct" element={<CreateProduct />} />
        <Route path="/modifications/products/:id" element={<ModificationProduct />} />
        <Route path="/HomeDashboard" element={<HomeDashboard />} />
        <Route path="/creationFabricante" element={<CreateFabricante />} />
        <Route path="/creationMarca" element={<CreateMarca />} />
      </Routes>
    );
  };
  
  export default DashboardRoutes;