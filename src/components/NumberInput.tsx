import styles from "../styles/NumberInput.module.css"

interface NumberInputProps {
  text: string
  value: number
  onChange: (newValue: number) => void
}

export default function NumberInput(props: NumberInputProps) {
  const increase = () => props.onChange(props.value + 1)
  const decrease = () => props.onChange(props.value - 1)

  return (
    <div className={styles.numberInput}>
      <span className={styles.text}>
        {props.text}
      </span>
      <span className={styles.value}>
        {props.value}
      </span>
      <div className={styles.dFlexButton}>
        <button className={styles.button} onClick={decrease}>-</button>
        <button className={styles.button} onClick={increase}>+</button>
      </div>
    </div>
  )
}