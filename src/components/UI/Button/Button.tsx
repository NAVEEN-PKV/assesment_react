import type { ButtonProps } from "../../../types/ButtonProps";
import "./Button.css";

const Button = ({ label, handleClick, id, buttonId }: ButtonProps) => {
  return (
    <div className="button-container">
      <button
        data-testid={`tab-button-${id}`}
        className={` ${buttonId === id ? "active-button" : ""}`}
        onClick={handleClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
