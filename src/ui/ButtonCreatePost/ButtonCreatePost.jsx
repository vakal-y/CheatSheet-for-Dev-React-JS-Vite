import styles from './ButtonCreatePost.module.scss';
import { useState } from 'react';
import create from '../../assets/icons/create.svg';
import Modal from '../Modal/Modal';

export default function ButtonCreatePost({ isUserAuthorized }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const handleOpenModal = () => {
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setModalOpen(false);
    }

    const handleCreatePost = () => {
        console.log("Post Created:", { title, content });
        setModalOpen(false);
    }

    return (
        <div className={styles.buttonCreate}>
            <button onClick={handleOpenModal}><img src={create} alt="Create note button" /></button>
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onCreatePost={handleCreatePost}
                title={title}
                content={content}
                onTitleChange={setTitle}
                onContentChange={setContent} />
        </div>
    )
}