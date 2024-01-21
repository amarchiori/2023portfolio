import {
    NavBarContainer,
    DropdownList,
    NavItem,
    MenuIcon,
    Alessandra,
    IconList,
} from './nav-styles'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleClick = () => {
        window.scrollTo(0, 0);
      };

    const [colorChange, setColorchange] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >= 80){
        setColorchange(true);
        }
        else{
        setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeColor);

  return (
    <>
    <NavBarContainer className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <IconList>
            <Alessandra to='/' className={colorChange ? 'logoName colorChange' : 'logoName'}>
                Alessandra M
            </Alessandra>     
        </IconList> 
        <MenuIcon 
            onClick={toggleDropdown}
            className={colorChange ? 'menuIcon colorChange' : 'menuIcon'}
        />
        {isOpen && (
            <DropdownList isOpen={isOpen}>
                <NavItem to='/frontend' onClick={handleClick}>FRONTEND</NavItem>
                <NavItem to='/uxui' onClick={handleClick}>UX/UI</NavItem>
                <NavItem to='/typography' onClick={handleClick}>TYPOGRAPHY</NavItem>
                <NavItem to='/animation' onClick={handleClick}>ANIMATION</NavItem>
            </DropdownList>
        )}
    </NavBarContainer>
    <Outlet/>
    </>
  )
}

export default NavBar