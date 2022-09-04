import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//components
import Dashboard from "../pages/dashboard/Dashboard.jsx"
import Customers from "../pages/customers/customersTable/customers.jsx";
import CreateCustomer from "../pages/customers/customer/create/create.jsx";
import EditCustomer from "../pages/customers/customer/edit/edit.jsx";
import WashingPrograms from "../pages/washingPrograms/washingProgramsTable/washingPrograms.jsx";
import WashingSteps from "../pages/washingSteps/washingStepsTable/washingSteps.jsx";
import CreateWashingStep from "../pages/washingSteps/washingStep/create/create.jsx";
import EditWashingStep from "../pages/washingSteps/washingStep/edit/edit.jsx";
import CreateWashingProgram from "../pages/washingPrograms/washingProgram/create/create.jsx";
import EditWashingProgram from "../pages/washingPrograms/washingProgram/edit/edit.jsx";

//layout
import Layout from "../layout/layout.jsx";

const Navigation = () => {
    
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/customers/create" element={<CreateCustomer />} />
                    <Route path="/customers/:id" element={<EditCustomer />} />
                    <Route path="/washing-steps" element={<WashingSteps />} />
                    <Route path="/washing-steps/create" element={<CreateWashingStep />} />
                    <Route path="/washing-steps/:id" element={<EditWashingStep />} />
                    <Route path="/washing-programs" element={<WashingPrograms />} />
                    <Route path="/washing-programs/create" element={<CreateWashingProgram />} />
                    <Route path="/washing-programs/:id" element={<EditWashingProgram />} />
                </Routes>
            </Layout>   
        </BrowserRouter>
    )
}
export default Navigation;