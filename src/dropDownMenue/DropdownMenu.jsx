import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as CogIcon } from "../images/icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../images/icons/chevron.svg";
import { ReactComponent as UserIcon } from "../images/icons/user.svg";
import { ReactComponent as ArrowIcon } from "../images/icons/arrow.svg";

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
          <DropdownItem leftIcon={<UserIcon />}>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main">
            My Profile
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
