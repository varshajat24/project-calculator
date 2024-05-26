import styles from './Display.module.css'


const Display = ({displayValue}) => {
    return  <input className={styles.Display} type="text" value={displayValue} readonly />
}


export  default Display;