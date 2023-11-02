// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';


import {AuthenticationContext, useAuthState} from "./Context/Context";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Components/Utilisateur/Login";
import {Inscription} from "./Components/Utilisateur/Inscription";
import {Header} from "./Components/HeaderAndFooter/Header";
import {Footer} from "./Components/HeaderAndFooter/Footer";
import SupprimerDossier from "./Components/Employer/SupprimerDossier";
import {CreeDossier} from "./Components/Employer/CreeDossier";

function App() {
  const authState = useAuthState();
  return (
   <AuthenticationContext.Provider value={authState}>
      <BrowserRouter>
          <Header/>
            <Routes>
                <Route index element={<Login/>}></Route>

                {/*<Route path={"employer"}>*/}
                    <Route path={"/creeDossier"} element={<CreeDossier/>}></Route>
                    <Route path={"/supprimer"} element={<SupprimerDossier/>}></Route>
                {/*</Route>*/}

                {/*<Route path={"medecin"}>*/}
                    <Route path={"/consulterDossier"} element={<CreeDossier/>}></Route>
                    <Route path={"/faireConsultation"} element={<Faire/>}></Route>
                    <Route path={"/inscription"} element={<Inscription/>}></Route>
                {/*</Route>*/}

                {/*<Route path={"patient"}>*/}
                    <Route path={"/supprimer"} element={<SupprimerDossier/>}></Route>
                {/*</Route>*/}
            </Routes>
          <Footer/>
      </BrowserRouter>
   </AuthenticationContext.Provider>
  );
}

export default App;
