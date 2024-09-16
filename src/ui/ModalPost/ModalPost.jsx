import styles from './ModalPost.module.scss';
import { useState } from 'react';

export default function ModalPost({ isOpen, onClose, title, content }) {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <div className={styles.modalPost} onClick={handleOverlayClick}>
            <div className={styles.modalPostContent}>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    )
}