import styles from '../../../styles/doorGame.module.css'
import { useEffect, useState } from "react"
import Door from "../../../components/Door"
import { createDoor, updateDoor } from "../../../functions/createDoor"
import Link from "next/link"
import { useRouter } from 'next/router'

export default function DoorGame() {
  const router = useRouter()
  const [doors, setDoors] = useState([])

  useEffect(() => {
    const doors = +router.query.doors
    const withGift = +router.query.withGift
    setDoors(createDoor(doors, withGift))
  }, [router?.query])

  function doorRender() {
    return doors.map(door => {
      return <Door key={door.number} value={door}
        onChange={newDoor => setDoors(updateDoor(doors, newDoor))} />
    })
  }

  return (
    <div className={styles.doorGame}>
      <div className={styles.doors}>
        {doorRender()}
      </div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Voltar</button>
        </Link>
      </div>
    </div>
  )
}