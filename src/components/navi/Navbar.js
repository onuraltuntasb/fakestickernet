import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import CartList from '../cart/CartList';
import {Link} from "react-router-dom"
const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
      <Link to = {"/"} >FakeSticker.net</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
           
            <NavItem>
              <NavLink href="https://github.com/OnurAltuntas">Github</NavLink>
            </NavItem>
          </Nav>
          <Nav>
          <NavItem>
              <NavLink><Link to="/saveProduct">Save Product(for Admin)</Link></NavLink>
            </NavItem>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Sort by
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                 Price:low to high
                </DropdownItem>
                <DropdownItem>
                Price:high to low
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav>
          <CartList/>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;