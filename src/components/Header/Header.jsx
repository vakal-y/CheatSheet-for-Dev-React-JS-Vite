import styles from './Header.module.scss';
import Logo from '../../ui/Logo/Logo';
import find from '../../assets/icons/find.svg';
import create from '../../assets/icons/create.svg';
import log from '../../assets/icons/log.svg';

export default function Header() {
    return (
        <div className={styles.header}>
            <Logo />
            <div className={styles.info}>
                <h1>Learn to JAVA SCRIPT</h1>
                <p>With our JS cheatSheet</p>
            </div>
            <nav className={styles.navigate}>
                <img src={find} alt="find" />
                <img src={create} alt="create" />
                <img src={log} alt="log" />
            </nav>
        </div>
    )
}