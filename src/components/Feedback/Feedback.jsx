import styles from '../Feedback/Feedback.module.css'

const Feedback = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={styles.list}>
            {options.map((option) => (
                <li key={option}>
                    <button
                        type="button"
                        className={styles.btn}
                        onClick={() => onLeaveFeedback(option)}>
                        {option}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Feedback;