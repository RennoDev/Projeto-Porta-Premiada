import styles from '../styles/Menu.module.css'
import Link from 'next/link'
import NumberInput from './NumberInput'
import { useEffect, useState } from 'react'

export default function Menu() {
  const [doorAmount, setDoorAmount] = useState(3)
  const [doorWithGift, setDoorWithGift] = useState(2)

  useEffect(() => {
    const max = doorAmount
    const min = 1
    setDoorWithGift(Math.floor(Math.random() * (max - min + 1)) + min)
  }, [doorAmount])

  return (
    <div className={styles.menu}>
      <h1>Monty Hall</h1>
      <p>Escolha a quantidade de portas, onde apenas uma se encontrará o presente, ache-o para ganhar!</p>
      <h3>Máximo de 10 portas!</h3>
      <NumberInput text="Quantidade de Portas" value={doorAmount} onChange={newDoorAmount => setDoorAmount(newDoorAmount)} />
      <Link href={`doorGame/${doorAmount}/${doorWithGift}`} passHref>
        <button className={styles.startButton}>Jogar</button>
      </Link>
    </div>
  )
}