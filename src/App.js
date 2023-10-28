import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {AuthenticationContext, useAuthState} from "./Context/Context";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Components/Utilisateur/Login";
import {Inscription} from "./Components/Utilisateur/Inscription";
import {Header} from "./Components/HeaderAndFooter/Header";
import {Footer} from "./Components/HeaderAndFooter/Footer";

function App() {
  const authState = useAuthState();
  return (
   <AuthenticationContext.Provider value={authState}>
      <BrowserRouter>
          <Header/>
            <Routes>
              <Route index path={"login"} element={<Login/>}></Route>
              <Route path={"inscription"} element={<Inscription/>}></Route>
            </Routes>
          <Footer/>
      </BrowserRouter>
   </AuthenticationContext.Provider>
  );
}

export default App;
