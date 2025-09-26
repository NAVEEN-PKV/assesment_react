import Navigation from "../../components/Tabs/Tabs"
import { tabsData } from "../../data/TabsData"

const HomePage = () => {
  return (
    <div>
      <Navigation tabsData={tabsData}/>
    </div>
  )
}

export default HomePage
