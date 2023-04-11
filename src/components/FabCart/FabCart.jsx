import { useState } from "react";
import cn from "classnames";
import { FaShoppingCart } from "react-icons/fa";

import "./FabCart.scss";
const FabCart = ({ actions }) => {
  const [open, setOpen] = useState(false);

  // Set open state to true if user hover over "ul" element 
  const mouseClick = () => setOpen(open==false?true:false);

  return (
    <ul
      className="fab-container"
      onClick={mouseClick}
    >
      <li className="fab-button">
        <FaShoppingCart />
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