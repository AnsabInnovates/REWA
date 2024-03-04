import React, { useState } from "react";
import './Header.css'
import {getMenuStyles} from "../../utils/common"
import OutsideClickHandler from "react-outside-click-handler";
import {BiMenuAltRight} from 'react-icons/bi'
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal";
import useAuthCheck from "../../hooks/useAuthCheck"
const Header = () =>{ 
    const [menuOpened, setMenuOpened]=useState(false);
    const [modalOpened, setModalOpened]= useState(false);
    const{loginWithRedirect, isAuthenticated, user, logout} =useAuth0()
    const {validateLogin} = useAuthCheck()
    
    const handleAddPropertyClick = () => {
        if(validateLogin()){
            setModalOpened(true);
        }};

    
    return(
        <div>
            <section className="h-wrapper">
                <div className="flexCenter paddings innerwidth h-conatiner">
                   <Link to="/">
                    <img src="./logo.png" alt="logo" width={100} />
                    </Link>
                    <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
                    
                    <div className="h-menu flexCenter" style={getMenuStyles(menuOpened)}   >
                        <NavLink to="/props">Properties</NavLink>
                        <a href="mailto:ansabmuhammed140@gmail.com">Contact</a>



                        <div onClick={handleAddPropertyClick}>
                            Add Property
                        </div>
                        <AddPropertyModal
                        opened={modalOpened}
                        setOpened={setModalOpened}
                        
                        />
                        {
                            !isAuthenticated ?(
                        <button className="button" onClick={loginWithRedirect}>
                            Login
                        </button>
                    ):(
                       <ProfileMenu user={user} logout={logout}/>
                    )}
                    </div>
                    </OutsideClickHandler>


                    <div className="menu-icon"
                    onClick={()=> setMenuOpened((prev)=>!prev)}
                    >
                    <BiMenuAltRight size={30}/>
                </div>
                </div>
                
            </section>
            
        </div>
    );
}
export default Header;