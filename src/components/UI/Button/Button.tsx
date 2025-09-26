import type{ ButtonProps } from "../../../types/ButtonProps"
import "./Button.css"

const Button = ({label,handleClick,id,buttonId}:ButtonProps) => {
  return (
    <div className="buttonContainer" >
        <button className={` ${buttonId === id ? "activeButton" : ""}`} onClick={handleClick}>{label}</button>

    </div>
  )
}

export default Button
