import styles from '../Statistic/Statistic.module.css'

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className={styles.list}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}%</li>
        </ul>
    )
}

export default Statistic;