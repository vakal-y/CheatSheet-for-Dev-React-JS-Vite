import styles from './Modal.module.scss';
import { useState } from 'react';

export default function Modal({ isOpen, onClose, title, content, onTitleChange, onContentChange, onCreatePost }) {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    return (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modalContent}>
                <h2>Create new card</h2>
                <input
                    className={styles.inputDark}
                    type="text"
                    placeholder="Heading"
                    value={title}
                    onChange={(e) => onTitleChange(e.target.value)}
                />
                <textarea
                    className={styles.inputDark}
                    placeholder="Text"
                    value={content}
                    onChange={(e) => onContentChange(e.target.value)}
                />
                <button onClick={onCreatePost} className={styles.inputDark}>Create Post</button>
            </div>
        </div>
    )
}