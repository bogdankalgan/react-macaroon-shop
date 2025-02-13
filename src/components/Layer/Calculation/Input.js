import styles from './Input.module.css';

function Input(props) {
    const {type, placeholder} = props

    return (
        <input type={type} placeholder={placeholder} className={styles.Input}/>
    )
}

export default Input;