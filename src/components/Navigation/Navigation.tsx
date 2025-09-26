import Button from "../UI/Button/Button"
import { NavigationData } from "../../data/NavigationData"
import type { NavigationDataTypes } from "../../types/NavigationDataTypes"
import "./Navigation.css"
import { useState } from "react"
import Display from "../UI/Display/Display"


const Navigation = () => {
    const [buttonId,setButtonId] = useState<number>(1)
    const filteredData = NavigationData.filter((item) => item.id === buttonId)

  return (
   <div className="navigationContainer">
     <div className="navigationButtons">
      {NavigationData.map((item: NavigationDataTypes) => (
        <Button key={item.id} id={item.id} buttonId={buttonId} label={item.label} handleClick={() => setButtonId(item.id)} />
      ))}
    </div>
    <div><Display data={filteredData[0]} /></div>
   </div>
  )
}

export default Navigation
