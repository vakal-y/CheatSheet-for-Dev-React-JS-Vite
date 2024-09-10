import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logoNull.svg';

export default function Logo() {
    return (
        <div className={styles.logo}>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
        </div>
    )
}