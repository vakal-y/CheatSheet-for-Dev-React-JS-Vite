import styles from './Header.module.scss';
import Logo from '../../ui/Logo/Logo';
import log from '../../assets/icons/log.svg';
import ButtonSearch from '../../ui/ButtonSearch/ButtonSearch';
import ButtonCreatePost from '../../ui/ButtonCreatePost/ButtonCreatePost';

export default function Header({ addPost }) {
    return (
        <div className={styles.header}>
            <Logo />
            <div className={styles.info}>
                <h1>Learn to JAVA SCRIPT</h1>
                <p>With our JS cheatSheet</p>
            </div>
            <nav className={styles.navigate}>
                <ButtonSearch />
                <ButtonCreatePost addPost={addPost} />
                <img src={log} alt="log" />
            </nav>
        </div>
    )
}