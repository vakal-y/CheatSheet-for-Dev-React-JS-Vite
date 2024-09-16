import styles from './HomePage.module.scss';
import { useState, useEffect } from 'react';
import ModalPost from '../../ui/ModalPost/ModalPost';
import useRandomContainerStyle from '../../helpers/useRandomContainerStyle';

export default function HomePage({ posts }) {
    const [selectedPost, setSelectedPost] = useState(null);
    const [isPostModalOpen, setPostModalOpen] = useState(false);

    const handleOpenPostModal = (post) => {
        setSelectedPost(post);
        setPostModalOpen(true);
    }

    const handleClosePostModal = () => {
        setSelectedPost(null);
        setPostModalOpen(false);
    }

    return (
        <div className={styles.homePage}>
            <div className={styles.postsPreview}>
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className={styles.postItem}
                        onClick={() => handleOpenPostModal(post)}
                    >
                        <h3>{post.title}</h3>
                    </div>
                ))}
            </div>
            {selectedPost && (
                <ModalPost
                    isOpen={isPostModalOpen}
                    onClose={handleClosePostModal}
                    title={selectedPost.title}
                    content={selectedPost.content}
                />
            )}
        </div>
    )
}