
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import {AuthenticationContext} from "../../Context/Context";
import {useContext} from "react";
import {Link, useNavigate,useLocation} from "react-router-dom";



export const Header = () => {
    const [authState, setAuthState]= useContext(AuthenticationContext);
    const navigate = useNavigate()
    const location = useLocation();


    const handleLogout = ()=>{
        setAuthState(
            {
                ...authState,
                isAuthenticated:false,
                user:undefined,
                token : undefined,
                roles : undefined,
                username : undefined

            })
        navigate("login")
    }

    return (

        <>
            <Navbar className="bg-[#a5e194] relative pt-3 ">
                <NavbarBrand >
                    <svg className="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                         stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <line x1="3" y1="21" x2="21" y2="21"/>
                        <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"/>
                        <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"/>
                        <line x1="10" y1="9" x2="14" y2="9"/>
                        <line x1="12" y1="7" x2="12" y2="11"/>
                    </svg>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {authState.roles === "MEDECIN" &&
                        <NavbarItem>
                        <div className="flex flex-wrap gap-4 items-center">
                            <Button className="text-slate-50"  variant="light ">
                                <Link to={"/medecin/consulterDossier"} className="no-underline text-slate-50" >Dossier patient</Link>
                            </Button>
                        </div>
                    </NavbarItem>
                    }
                    {authState.roles === "MEDECIN" &&
                        <NavbarItem>
                            <div className="flex flex-wrap gap-4 items-center">
                                <Button className="text-slate-50" variant="light">
                                    <Link to={"/medecin/modifierDossier"} className="no-underline text-slate-50" >Modifier dossier</Link>
                                </Button>
                            </div>
                        </NavbarItem>
                    }
                    {authState.roles === "MEDECIN" &&
                        <NavbarItem>
                            <div className="flex flex-wrap gap-4 items-center h-screen">
                                <Button className="text-slate-50" variant="light">
                                    <Link to={"/medecin/faireConsultation"} className="no-underline text-slate-50" >Consultation</Link>
                                </Button>
                            </div>
                        </NavbarItem>
                    }
                    {authState.roles === "EMPLOYER" &&
                        <NavbarItem>
                            <div className="flex flex-wrap gap-4 items-center">
                                <Button className="text-slate-50" variant="light">
                                    <Link to={"/employer/creeDossie"} className="no-underline text-slate-50" >Ajouter dossier</Link>
                                </Button>
                            </div>
                        </NavbarItem>
                    }
                    {authState.roles === "EMPLOYER" &&
                        <NavbarItem>
                            <div className="flex flex-wrap gap-4 items-center h-screen">
                                <Button className="text-slate-50" variant="light">
                                    <Link to={"/employer/supprimer"} className="no-underline text-slate-50" >Supprimer</Link>
                                </Button>
                            </div>
                        </NavbarItem>
                    }
                </NavbarContent>
                <NavbarContent justify="end">
                    {location.pathname === '/notAuthorized' ?
                        <NavbarItem>
                            <Button  className={"text-slate-50"} onClick={handleLogout}  variant="flat">
                                Connexion
                            </Button>
                        </NavbarItem>
                        :
                        <NavbarItem>
                            <Button  className={"text-slate-50"} onClick={handleLogout}  variant="flat">
                                Déconnexion
                            </Button>
                        </NavbarItem>
                    }


                </NavbarContent>

            </Navbar>

        </>
    )
}