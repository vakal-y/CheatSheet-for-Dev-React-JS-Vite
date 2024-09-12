import styles from './ButtonSearch.module.scss';
import { useState, useRef } from 'react';
import find from '../../assets/icons/find.svg';

export default function ButtonSearch() {
    const [isInputVisible, setInputVisible] = useState(false);
    const inputRef = useRef(null);

    const handleButtonClick = () => {
        setInputVisible(!isInputVisible);
    }

    const handleBlur = () => {
        setInputVisible(false);
    }

    return (
        <div className={styles.buttonSearch}>
            {isInputVisible && (
                <input
                    type="text"
                    placeholder="Введите текст"
                    ref={inputRef}
                    onBlur={handleBlur}
                    autoFocus
                />
            )}
            <button onClick={handleButtonClick}><img src={find} alt="find" /></button>
        </div>
    )
}