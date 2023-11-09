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

function App() {
    const authState = useAuthState();
    return (
        <AuthenticationContext.Provider value={authState}>
            <BrowserRouter>
                <HeaderControl />
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="/employer/">
                        <Route path="menuEmployer" exact element={<MenuEmployer />} />
                        <Route path="creeDossie" element={<CreeDossier />} />
                        <Route path="supprimer" element={<SupprimerDossier />} />
                    </Route>

                    <Route path="/medecin/">
                        <Route path="menuMedecin" element={<MenuMedecin />} />
                        <Route path="consulterDossier" element={<CreeDossier />} />
                        <Route path="faireConsultation" element={<FaireConsultation />} />
                        <Route path="modifierDossier" element={<ModifierDossier />} />
                    </Route>

                    <Route path="/patient/">
                        <Route path="menuPatient" element={<MenuPatient />} />
                        <Route path="consultation/:numCmu" element={<Consultation />} />
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