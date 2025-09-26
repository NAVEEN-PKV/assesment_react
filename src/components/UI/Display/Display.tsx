import type { DisplayProps } from "../../../types/DisplayProps"
import "./Display.css"

const Display = ({data}:DisplayProps) => {
  return (
    <div className="displayContainer">
      
        <h3>{data?.heading}</h3>
      <p>{data?.content}</p>
    </div>  
  )
}

export default Display
