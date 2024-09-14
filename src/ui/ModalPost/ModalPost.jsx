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
            <div className={styles.modalPostContent}></div>
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.content}</p>
        </div>
    )
}