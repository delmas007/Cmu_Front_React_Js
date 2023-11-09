import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {AuthenticationContext, useAuthState} from "./Context/Context";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Login from "./Components/Utilisateur/Login";
import {Header} from "./Components/HeaderAndFooter/Header";
import {Footer} from "./Components/HeaderAndFooter/Footer";
import SupprimerDossier from "./Components/Employer/SupprimerDossier";
import {FaireConsultation} from "./Components/Medecin/FaireConsultation";
import ModifierDossier from "./Components/Medecin/ModifierDossier";
import {Consultation} from "./Components/Patient/Consultation";
import CreeDossier from "./Components/Employer/CreeDossier";
import MenuEmployer from "./Components/Employer/MenuEmployer";
import MenuMedecin from "./Components/Medecin/MenuMedecin";
import MenuPatient from "./Components/Patient/MenuPatient";
import ConsulterDossier from "./Components/Medecin/ConsulterDossier";
import NotAuthorized from "./Components/protected/NotAuthorized";
import ProtectedRoute from "./Components/protected/ProtectedRoute";
import ProtectedByRoleRoute from "./Components/protected/ProtectedByRoleRoute";

function App() {
    const authState = useAuthState();
    return (
        <AuthenticationContext.Provider value={authState}>
            <BrowserRouter>
                <HeaderControl />
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="login" element={<Login />} />

                    <Route path={"notAuthorized"} element={
                        <ProtectedRoute>
                            <NotAuthorized></NotAuthorized>
                        </ProtectedRoute>
                    }>
                    </Route>

                    <Route path="/employer/">
                        <Route path="menuEmployer" element={
                            <ProtectedByRoleRoute role={"EMPLOYER"}>
                                <MenuEmployer />
                            </ProtectedByRoleRoute>
                        } />
                        <Route path="creeDossie" element={
                            <ProtectedByRoleRoute role={"EMPLOYER"}>
                                <CreeDossier />
                            </ProtectedByRoleRoute>
                            } />
                        <Route path="supprimer" element={
                            <ProtectedByRoleRoute role={"EMPLOYER"}>
                                <SupprimerDossier />
                            </ProtectedByRoleRoute>
                        } />
                    </Route>

                    <Route path="/medecin/">
                        <Route path="menuMedecin" element={
                            <ProtectedByRoleRoute role={"MEDECIN"}>
                                <MenuMedecin />
                            </ProtectedByRoleRoute>
                        } />
                        <Route path="consulterDossier" element={
                            <ProtectedByRoleRoute role={"MEDECIN"}>
                                <ConsulterDossier />
                            </ProtectedByRoleRoute>
                        } />
                        <Route path="faireConsultation" element={
                            <ProtectedByRoleRoute role={"MEDECIN"}>
                                <FaireConsultation />
                            </ProtectedByRoleRoute>
                        } />
                        <Route path="modifierDossier" element={
                            <ProtectedByRoleRoute role={"MEDECIN"}>
                                <ModifierDossier />
                            </ProtectedByRoleRoute>
                        } />
                    </Route>

                    <Route path="/patient/">
                        <Route path="menuPatient" element={
                            <ProtectedByRoleRoute role={"MEDECIN"}>
                                <MenuPatient />
                            </ProtectedByRoleRoute>
                        } />
                        <Route path="consultation/:numCmu" element={
                            <ProtectedByRoleRoute role={"MEDECIN"}>
                                <Consultation />
                            </ProtectedByRoleRoute>
                        } />
                    </Route>

                </Routes>
                <FooterControl />

            </BrowserRouter>
        </AuthenticationContext.Provider>
    );
}
function HeaderControl() {
    const location = useLocation();
    const hideHeaderOnRoutes = ['/', '/login'];
    const shouldHideHeader = hideHeaderOnRoutes.includes(location.pathname);

    return shouldHideHeader ? null : <Header />;
}
function FooterControl() {
    const location = useLocation();
    const hideHeaderOnRoutes = ['/', '/login'];
    const shouldHideHeader = hideHeaderOnRoutes.includes(location.pathname);

    return shouldHideHeader ? null : <Footer />;
}

    export default App;