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
              {aPost.title}: {aPost.description}
              <ul>
                <li>
                  <img src={aPost.image} alt="post" width="150" height="150" />
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </Main>
    </RestrictedRoute>
  );
}

export default Dashboard;
