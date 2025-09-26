import Button from "../UI/Button/Button";
import type { TabsProps } from "../../types/TabProps";
import type { TabData } from "../../types/TabData";
import "./Tabs.css";
import { useState } from "react";
import Content from "../UI/Content/Content";

const Tabs = ({tabsData}:TabsProps) => {
  const [activeTabId, setActiveTabId] = useState<number>(tabsData[0].id);
  const activeData = tabsData.find((item) => item.id === activeTabId);
  return (
    <div className="tabs-container">
      <div className="tabs-buttons">
        {tabsData.map((item: TabData) => (
          <Button
            key={item.id}
            id={item.id}
            buttonId={activeTabId}
            label={item.label}
            handleClick={() => setActiveTabId(item.id)}
          />
        ))}
      </div>
      <div> {activeData && <Content data={activeData} />}</div>
    </div>
  );
};

export default Tabs;
