import React, { useEffect, useState } from 'react';
import Main from 'components/layouts/main/Main';
import { RestrictedRoute } from 'utils/AuthorisationRoutes';
import { get } from 'services/firebase';

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    get('posts/').then((databasePosts) => {
      setPosts(Object.values(databasePosts ?? {}));
    });
  }, []);

  return (
    <RestrictedRoute>
      <Main>
        <h1>Hello from Dashboard</h1>
        <ul>
          {posts.map((aPost) => (
            <li key={aPost.id}>
              <div>
                <h5>{aPost.author?.name ?? 'NO AUTHOR'}:</h5>
              </div>
              <div>
                <h3>{aPost.title}</h3>
              </div>
              <div>{aPost.description}</div>
              <img src={aPost.image} alt="post" width="250" height="250" />
            </li>
          ))}
        </ul>
      </Main>
    </RestrictedRoute>
  );
}

export default Dashboard;
