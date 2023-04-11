import { useState } from "react";
import cn from "classnames";
import { FaShoppingCart, FaTimes } from "react-icons/fa";

import "./FabCart.scss";
const FabCart = ({ actions }) => {
  const [open, setOpen] = useState(false);
  const mouseClick = () => setOpen(open == false ? true : false);

  return (
    <ul
      className="fab-container"
    >
      <li
        className="fab-button"
        onClick={mouseClick}
      >
        {open ? <FaTimes /> : <FaShoppingCart />}
        <span class="fab-count">1</span>
      </li>
      {actions.map((action, index) => (
        <li
          style={{ transitionDelay: `${index * 25}ms` }}
          className={cn("fab-action", { open })}
          key={action.label}
          onClick={action.onClick}
        >
          {action.icon}
          < span className="tooltip" > {action.label}</span>
        </li >
      ))}
    </ul >
  );
};

export default FabCart;