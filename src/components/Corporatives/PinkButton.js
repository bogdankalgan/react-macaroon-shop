import styles from "./PinkButton.module.css"

function PinkButton(props) {
    const {text} = props

    return (
        <button className={styles.pinkButton}>{text}</button>
    )
}

export default PinkButton