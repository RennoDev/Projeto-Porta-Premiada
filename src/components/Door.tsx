import styles from '../styles/Door.module.css';
import DoorModel from '../model/door';
import Gift from '../components/Gift'

interface DoorProps {
  value: DoorModel
  onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {

  const door = props.value
  const selected = door.selected && !door.open ? styles.selectedDoor : ""

  const switchSelect = e => props.onChange(door.switchSelect())
  const switchOpen = e => {
    e.stopPropagation()
    props.onChange(door.switchOpen())
  }

  function doorRender() {
    return (
      <div className={styles.door}>
        <div className={styles.doorNumber}>
          {door.number}
        </div>
        <div className={styles.doorHandle} onClick={switchOpen}></div>
      </div>
    )
  }

  return (
    <div className={styles.area} onClick={switchSelect}>
      <div className={`${styles.doorBorder} ${selected}`}>
        {door.close ? doorRender() : door.haveGift ? <Gift /> : false}
      </div>
      <div className={styles.ground}></div>
    </div>
  )
}