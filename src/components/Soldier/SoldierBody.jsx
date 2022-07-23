import React, { useState } from "react"
import CoreMemories from "../CoreMemories/CoreMemories"
import Gifts from "../Gifts/Gifts"
import Plans from "../Plans/Plans"
import Reminders from "../Reminders/Reminders"

const SoldierBody = () => {
  const [tab, setTab] = useState("Reminders")

  const handleTab = (tabName) => {
    setTab(tabName)
  }

  return(
    <>
      <div className="flex-row">
        <h6 onClick={() => handleTab("Reminders")}>Reminders</h6>
        <h6 onClick={() => handleTab("Plans")}>Dates/Hangouts</h6>
        <h6 onClick={() => handleTab("Gifts")}>Gifts</h6>
        <h6 onClick={() => handleTab("Core Memories")}>Core Memories</h6>
      </div>

      <div>
        {tab === "Reminders" ? 
          <Reminders/> :
        tab === "Plans" ?
          <Plans/> :
        tab === "Gifts" ?
          <Gifts/> 
        :
          <CoreMemories/>
        }
      </div>

    </>
  )
}

export default SoldierBody