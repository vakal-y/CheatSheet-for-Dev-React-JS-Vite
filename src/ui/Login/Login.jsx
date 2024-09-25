import styles from './Login.module.scss';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        event.preventDefault();
    }

    return (
        <div>
            <form className={styles.loginForm} onSubmit={handleLogin}>
                <input type="email" id="email" placeholder="Email" required />
                <input type="password" id="password" placeholder="Password" required />
                <button className={styles.buttonClick} type="submit">Log in</button>
            </form>
        </div>
    )
}