import {Link} from "react-router-dom";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";




export const Header = () => {
    return (
        <>
            <Navbar className="bg-[#a5e194] relative ">
                <NavbarBrand >
                    {/*<AcmeLogo />*/}
                    <p className="font-bold text-slate-50">ACME</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link className={"text-slate-50"}  to={"#"}>
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem >
                        <Link to={"#"} className={"text-slate-50"} aria-current="page">
                            Customers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className={"text-slate-50"} to={"#"}>
                            Integrations
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button  className={"text-slate-50"} href="#" variant="flat">
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

        </>
    )
}