import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import Logo from '../../ui/Logo/Logo';
import telegram from '../../assets/icons/socialsTelegram.svg';
import github from '../../assets/icons/socialsGit.svg';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <nav>
                <ul>
                    <li><Link>About us</Link></li>
                    <li><Link to="/"><img src={telegram} alt="telegram" /></Link></li>
                    <li><Link to="/"><img src={github} alt="github" /></Link></li>
                    <li><p>Made by
                        CMND+Fem collab</p></li>
                    <li><Logo /></li>
                </ul>
            </nav>
        </div>
    )
}