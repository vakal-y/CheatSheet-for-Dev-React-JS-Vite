import styles from './Login.module.scss';

export default function Login() {
    return (
        <div>
            <form className={styles.loginForm}>
                <input type="email" id="email" placeholder="Введите ваш email" required />
                <input type="password" id="password" placeholder="Введите ваш пароль" required />
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}