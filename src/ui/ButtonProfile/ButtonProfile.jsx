import styles from './ButtonProfile.module.scss';
import ModalAuth from '../ModalAuth/ModalAuth';
import log from '../../assets/icons/log.svg';
import { useState } from 'react';

export default function ButtonProfile() {
    const [isModalOpen, setModalOpen] = useState(null);

    const handleOpenModal = () => {
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setModalOpen(false);
    }

    return (
        <div className={styles.buttonProfile}>
            <button onClick={handleOpenModal}><img src={log} alt="Profile icon" /></button>
            <ModalAuth
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    )
}