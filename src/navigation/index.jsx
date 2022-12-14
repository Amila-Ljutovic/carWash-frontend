import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

//components

import Customers from "../pages/customers/customersTable/customers.jsx";
import CreateCustomer from "../pages/customers/customer/create/create.jsx";
import EditCustomer from "../pages/customers/customer/edit/edit.jsx";
import WashingPrograms from "../pages/washingPrograms/washingProgramsTable/washingPrograms.jsx";
import WashingSteps from "../pages/washingSteps/washingStepsTable/washingSteps.jsx";
import CreateWashingStep from "../pages/washingSteps/washingStep/create/create.jsx";
import EditWashingStep from "../pages/washingSteps/washingStep/edit/edit.jsx";
import CreateWashingProgram from "../pages/washingPrograms/washingProgram/create/create.jsx";
import EditWashingProgram from "../pages/washingPrograms/washingProgram/edit/edit.jsx";
import Transactions from "../pages/transactions/transactionsTable/transactions.jsx";
import EditTransaction from "../pages/transactions/transaction/edit/edit.jsx";
import CreateTransaction from "../pages/transactions/transaction/create/create.jsx";
import LoginForm from "../pages/login/loginForm.jsx";
import PrivateRoutes from "../utils/privateRoute.js";
import DashboardPreview from "../pages/dashboard/dashboardPreview.jsx";

//layout
import Layout from "../layout/layout.jsx";


const Navigation = () => {
    
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    <Route element={<PrivateRoutes />}>
                        <Route element={<Layout> <Outlet /> </Layout>}>
                            <Route exact path="/" element={<DashboardPreview />} />
                            <Route path="/customers" element={<Customers />} />
                            <Route path="/customers/create" element={<CreateCustomer />} />
                            <Route path="/customers/:id" element={<EditCustomer />} />
                            <Route path="/washing-steps" element={<WashingSteps />} />
                            <Route path="/washing-steps/create" element={<CreateWashingStep />} />
                            <Route path="/washing-steps/:id" element={<EditWashingStep />} />
                            <Route path="/washing-programs" element={<WashingPrograms />} />
                            <Route path="/washing-programs/create" element={<CreateWashingProgram />} />
                            <Route path="/washing-programs/:id" element={<EditWashingProgram />} />
                            <Route path="/transactions" element={<Transactions />} />
                            <Route path="/transactions/create" element={<CreateTransaction />} />
                            <Route path="/transactions/:id" element={<EditTransaction />} />
                        </Route> 
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}
export default Navigation;