import React from "react";
import cl from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.MyModal];
  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div onClick={() => setVisible(false)} className={rootClasses.join(" ")}>
      <div onClick={(e) => e.stopPropagation()} className={cl.MyModalContent}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
