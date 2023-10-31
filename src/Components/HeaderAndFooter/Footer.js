import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer className="sticky-bottom d-flex flex-wrap justify-content-between align-items-center py-3 mt-auto  border-top"
                    style={{background:"#198754"}}
            >
                <div className="col-md-4 d-flex align-items-center" style={{color:"white"}} >
                    <Link  className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1" to={""}>
                        <svg className="bi" width="30" height="24">
                            {/*<use xlink:href="#bootstrap"></use>*/}
                        </svg>
                    </Link>
                    <div className="mb-3 mb-md-0 " >© 2022 Company, Inc</div>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <Link className="text-muted" href="#" to={""}>
                        <svg className="bi" width="24" height="24">
                            {/*<use xlink:href="#twitter"></use>*/}
                        </svg></Link></li>
                    <li className="ms-3"><Link className="text-muted" to={""}>
                        <svg className="bi" width="24" height="24">
                            {/*<use xlink:href="#instagram"></use>*/}
                        </svg>
                    </Link></li>
                    <li className="ms-3"><Link className="text-muted"  to={""}>
                        <svg className="bi" width="24" height="24">
                            {/*<use xlink:href="#facebook"></use>*/}
                        </svg>
                    </Link></li>
                </ul>
            </footer>
        </>
    )
}
