import styles from './Registration.module.scss';

export default function Registration() {
    return (
        <div>
            <form className={styles.regForm}>
                <input type="text" placeholder='Name' required />
                <input type="email" placeholder='Email' required />
                <input type="password" placeholder='Password' required />
                <input type="password" placeholder='Repeat password' required />
                <button className={styles.buttonClick}>Register</button>
            </form>
        </div>
    )
}