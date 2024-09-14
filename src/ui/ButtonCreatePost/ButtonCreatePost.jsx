import styles from './ButtonCreatePost.module.scss';
import { useState, useId } from 'react';
import create from '../../assets/icons/create.svg';
import Modal from '../Modal/Modal';

export default function ButtonCreatePost({ isUserAuthorized, addPost }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const uniqueId = useId();

    const handleOpenModal = () => {
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setModalOpen(false);
        setTitle('');
        setContent('');
    }

    const handleCreatePost = () => {
        const newPost = { id: `${uniqueId}-${Date.now()}`, title, content };
        addPost(newPost);
        console.log(`${uniqueId}-${Date.now()}`, title, content);
        handleCloseModal();
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