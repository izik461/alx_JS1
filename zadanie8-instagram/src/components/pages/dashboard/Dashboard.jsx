import React, { useContext, useEffect, useState } from 'react';
import Main from 'components/layouts/main/Main';
import { RestrictedRoute } from 'utils/AuthorisationRoutes';
import { get, save, update } from 'services/firebase';
import { MainContext } from 'contexts/main';
import styles from './style.module.css';

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const { currentUser } = useContext(MainContext);
  useEffect(() => {
    get('posts/').then((databasePosts) => {
      setPosts(Object.values(databasePosts ?? {}));
    });
  }, []);

  const handleLikeTappped = (post) => {
    const wasLiked = post.likes?.find(
      (like) => like.email === currentUser.email
    );

    if (wasLiked) {
      console.log('already liked - returning');
      return;
    }
    const newLikes = post.likes
      ? post.likes.concat({ email: currentUser.email })
      : [{ email: currentUser.email }];

    update(`posts/${post.id}`, {
      ...post,
      likes: newLikes,
    }).then(() => {
      const copiedPostArray = [...posts];
      const selectedPostIndex = posts.findIndex(
        (frontPost) => frontPost.id === post.id
      );

      copiedPostArray[selectedPostIndex].likes = newLikes;
      setPosts(copiedPostArray);
      save('notifications', {
        value: `${currentUser.displayName} liked your post`,
        reciepient: post.author.name,
      });
    });
  };

  return (
    <RestrictedRoute>
      <Main>
        <ul className={styles.list}>
          {posts.map((post) => {
            const wasLiked = post.likes?.find(
              (like) => like.email === currentUser.email
            );
            return (
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
                <div
                  className={`${styles.likesContainer} ${
                    wasLiked ? styles.likedPost : ''
                  }`}
                >
                  <button
                    onClick={() => {
                      handleLikeTappped(post);
                    }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Ei-like.svg/1200px-Ei-like.svg.png"
                      alt="Like"
                    />
                    <p>Like ({post.likes?.length ?? 0})</p>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </Main>
    </RestrictedRoute>
  );
}

export default Dashboard;
