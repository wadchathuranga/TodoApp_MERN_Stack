import React from "react";
import Button from "./Button";

const Header = ({ onAdd, showAdd }) => {
  return (
    <header className="header">
      <h2>My Todo Application</h2>
      <Button
        color={showAdd ? "green" : "red"}
        text={showAdd ? "Add New" : "Close"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
