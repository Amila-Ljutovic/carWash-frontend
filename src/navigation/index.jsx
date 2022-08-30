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

//layout
import Layout from "../layout/layout.jsx";

const Navigation = () => {
    
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/washing-steps" element={<WashingSteps />} />
                    <Route path="/washing-programs" element={<WashingPrograms />} />
                </Routes>
            </Layout>
                    {/* <Route index element={<Home />} />
                    <Route path="teams" element={<Teams />}>
                    <Route path=":teamId" element={<Team />} />
                    <Route path=":teamId/edit" element={<EditTeam />} />
                    <Route path="new" element={<NewTeamForm />} />
                    <Route index element={<LeagueStandings />} />
                    </Route>
                </Route>
                <Route element={<PageLayout />}>
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/tos" element={<Tos />} />
                </Route>
                <Route path="contact-us" element={<Contact />} /> */}
            
        </BrowserRouter>
    )
}
export default Navigation;