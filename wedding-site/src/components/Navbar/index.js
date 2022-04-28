import { React, useState } from "react";
import { Bars, Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <>
            <Nav>
                <Bars onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }} />

                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/details" activeStyle>
                        Details
                    </NavLink>
                    <NavLink to="/rsvp" activeStyle>
                        RSVP
                    </NavLink>
                    <NavLink to="/photoUpload" activeStyle>
                        Photo Upload
                    </NavLink>
                    <NavLink to="/photoGallery" activeStyle>
                        Photo Gallery
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
