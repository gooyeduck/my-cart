import { useState } from "react";
import cn from "classnames";
import Products from "../Products/Products";
import { FaShoppingCart, FaTimes } from "react-icons/fa";

import "./FabCart.scss";
const FabCart = ({ actions }) => {
  const [open, setOpen] = useState(false);
  const mouseClick = () => setOpen(open == false ? true : false);

  return (
    <div
      className="fab-container"
    >
      <div
        className="fab-button"
        onClick={mouseClick}
      >
        {open ? <FaTimes /> : <FaShoppingCart />}
        <span className="fab-count">1</span>
      </div>
      {actions.map((action, index) => (
        <div
          style={{ transitionDelay: `${index * 25}ms` }}
          className={cn("fab-action", { open })}
          key={action.label}
          onClick={action.onClick}
        >
          <Products/>
          < span className="tooltip" > {action.label}</span>
        </div >
        
      ))}
    </div >
  );
};

export default FabCart;