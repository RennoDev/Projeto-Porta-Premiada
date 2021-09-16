import styles from '../styles/Menu.module.css'
import Link from 'next/link'
import NumberInput from './NumberInput'
import { useState } from 'react'

export default function Menu() {
  const [doorAmount, setDoorAmount] = useState(5)
  const [doorWithGift, setDoorWithGift] = useState(3)

  return (
    <div className={styles.menu}>
      <h1>Monty Hall</h1>
      <NumberInput text="Quantidade de Portas" value={doorAmount} onChange={newDoorAmount => setDoorAmount(newDoorAmount)} />
      <NumberInput text="Porta com Presente" value={doorWithGift} onChange={newDoorWithGift => setDoorWithGift(newDoorWithGift)} />
      <Link href={`doorGame/${doorAmount}/${doorWithGift}`}>
        <button className={styles.startButton}>Jogar</button>
      </Link>
    </div>
  )
}