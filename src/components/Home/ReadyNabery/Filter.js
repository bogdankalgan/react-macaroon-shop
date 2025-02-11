import styles from "./Filter.module.css";

function Filter(props) {
    const {text} = props;
    return (
        <div className={styles.Filter}>{text}</div>
    )
}

export default Filter;