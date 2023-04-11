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
        <span className="fab-count">1</span>
      </li>
      {actions.map((action, index) => (
        <li
          style={{ transitionDelay: `${index * 25}ms` }}
          className={cn("fab-action", { open })}
          key={action.label}
          onClick={action.onClick}
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla accusamus, eaque similique laborum doloribus quas iusto ratione voluptates autem adipisci! Possimus eligendi veritatis dicta. Maiores quo sequi nam itaque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla accusamus, eaque similique laborum doloribus quas iusto ratione voluptates autem adipisci! Possimus eligendi veritatis dicta. Maiores quo sequi nam itaque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla accusamus, eaque similique laborum doloribus quas iusto ratione voluptates autem adipisci! Possimus eligendi veritatis dicta. Maiores quo sequi nam itaque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla accusamus, eaque similique laborum doloribus quas iusto ratione voluptates autem adipisci! Possimus eligendi veritatis dicta. Maiores quo sequi nam itaque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla accusamus, eaque similique laborum doloribus quas iusto ratione voluptates autem adipisci! Possimus eligendi veritatis dicta. Maiores quo sequi nam itaque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla accusamus, eaque similique laborum doloribus quas iusto ratione voluptates autem adipisci! Possimus eligendi veritatis dicta. Maiores quo sequi nam itaque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla accusamus, eaque similique laborum doloribus quas iusto ratione voluptates autem adipisci! Possimus eligendi veritatis dicta. Maiores quo sequi nam itaque.</p>
          < span className="tooltip" > {action.label}</span>
        </li >
        
      ))}
    </ul >
  );
};

export default FabCart;