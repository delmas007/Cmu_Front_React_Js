import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt, faUserDoctor} from "@fortawesome/free-solid-svg-icons";



export const Header = () => {
    return (
        <>
            <nav className=" navbar navbar-expand-lg bg-light py-3 ">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-2" to={"#"}>
                        <FontAwesomeIcon icon={faUserDoctor} style={{color: "#198754",height:"80 px",width:"80"}} />
                    </Link>
                    <button className="navbar-toggler" type="button"  data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className=" btn btn-outline-success mx-2 " aria-current="page" to={"#"}>Consultation</Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" btn btn-outline-success mx-2  " aria-current="page" to={"#"}>Dossier patient</Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" btn btn-outline-success mx-2 " aria-current="page" to={"#"}>Voir dossier patient</Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" btn btn-outline-success mx-2 " aria-current="page" to={"#"}>Ajouter dossier</Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" btn btn-outline-success  " aria-current="page" to={"#"}>Modifier dossier</Link>
                            </li>
                        </ul>
                        <Link className="icon-link me-5" to={"#"} >
                            <FontAwesomeIcon icon={faSignOutAlt} style={{color: "#1f5142",}} />
                        </Link>
                    </div>
                </div>
            </nav>

        </>
    )
}