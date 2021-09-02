import styles from '../styles/Door.module.css';
import DoorModel from '../model/door';

interface DoorProps {
  door: DoorModel
}

export default function Door(props: DoorProps) {

  const { door } = props
  const selected = door.selected ? styles.selectedDoor : ""

  return (
    <div className={styles.area}>
      <div className={`${styles.doorBorder} ${selected}`}>
        <div className={styles.door}>
          <div className={styles.doorNumber}>
            {door.number}
          </div>
          <div className={styles.doorHandle}></div>
        </div>
      </div>
      <div className={styles.ground}></div>
    </div>
  )
}