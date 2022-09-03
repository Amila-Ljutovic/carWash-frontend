import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//components
import Dashboard from "../pages/dashboard/Dashboard.jsx"
import Customers from "../pages/customers/Customers.jsx"
import WashingPrograms from "../pages/washingPrograms/washingPrograms.jsx";
import WashingSteps from "../pages/washingSteps/washingStepsTable/washingSteps.jsx";
import CreateWashingStep from "../pages/washingSteps/washingStep/create/create.jsx";
import EditWashingStep from "../pages/washingSteps/washingStep/edit/edit.jsx";
//layout
import Layout from "../layout/layout.jsx";

const Navigation = () => {
    
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="/washing-steps" element={<WashingSteps />} />
                    <Route path="/washing-steps/create" element={<CreateWashingStep />} />
                    <Route path="/washing-steps/:id" element={<EditWashingStep />} />
                    <Route path="/washing-programs" element={<WashingPrograms />} />
                </Routes>
            </Layout>   
        </BrowserRouter>
    )
}
export default Navigation;