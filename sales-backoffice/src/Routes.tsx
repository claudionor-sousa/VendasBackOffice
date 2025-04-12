import { BrowserRouter, Route, Routes } from "react-router";
import AuthComponent from "./pages/Authentication";
import DashComponent from "./pages/Dashboard";
import ProductComponent from "./pages/Product";
import SalesComponent from "./pages/Sales";
import CustomersComponent from "./pages/Customers";
import FinancialComponent from "./pages/Financial";
import ReportsComponent from "./pages/Reports";
import UsersComponent from "./pages/Users";

const RoutesApp = () =>{
return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AuthComponent/>}/>
            <Route path="/dashboard" element={<DashComponent/>}/>
            <Route path="/product" element={<ProductComponent/>}/>
            <Route path="/sales" element={<SalesComponent/>}/>
            <Route path="/customers" element={<CustomersComponent/>}/>
            <Route path="/financial" element={<FinancialComponent/>}/>
            <Route path="/reports" element={<ReportsComponent/>}/>
            <Route path="/users" element={<UsersComponent/>}/>
        </Routes>
    </BrowserRouter>
);
};
export default RoutesApp;