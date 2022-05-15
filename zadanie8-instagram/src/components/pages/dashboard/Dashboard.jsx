import React, { useEffect, useState } from 'react';
import Main from 'components/layouts/main/Main';
import { RestrictedRoute } from 'utils/AuthorisationRoutes';
import { get, update } from 'services/firebase';
import styles from './style.module.css';

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    get('posts/').then((databasePosts) => {
      setPosts(Object.values(databasePosts ?? {}));
    });
  }, []);

  const handleLikeTappped = (post) => {
    console.log('Tapped like!');
    update(`/posts/${post.id}`, {
      ...post,
      likes: post.likes + 1,
    });
  };

  return (
    <RestrictedRoute>
      <Main>
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.id}>
              <div className={styles.avatarContainer}>
                <img src={post.author?.avatar} alt="avatar" />
                <p>{post.author?.name}</p>
              </div>
              <img src={post.image} alt="post" />
              <div className={styles.descriptionContainer}>
                <p className={styles.title}>{post.title}</p>
                <p className={styles.description}>{post.description}</p>
              </div>
              <div className={styles.likesContainer}>
                <button
                  onClick={() => {
                    handleLikeTappped(post);
                  }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Ei-like.svg/1200px-Ei-like.svg.png"
                    alt="Like"
                  />
                  <p>Like ({post.likes})</p>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Main>
    </RestrictedRoute>
  );
}

export default Dashboard;
