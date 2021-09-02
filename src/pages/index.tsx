import { useState } from "react";
import Door from "../components/Door";
import { createDoor, updateDoor } from "../functions/createDoor";
import DoorModel from '../model/door';

export default function Home() {

  const [doors, setDoors] = useState(createDoor(3, 2))

  function doorRender() {
    return doors.map(door => {
      return <Door key={door.number} value={door}
        onChange={newDoor => setDoors(updateDoor(doors, newDoor))} />
    })
  }

  return (
    <div style={{ display: "flex" }}>
      {doorRender()}
    </div>
  )
}
