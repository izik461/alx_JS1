import React, { useEffect, useState } from 'react';
import Main from 'components/layouts/main/Main';
import { RestrictedRoute } from 'utils/AuthorisationRoutes';
import { observe } from 'services/firebase';

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    observe('posts/', setPosts);
  }, []);

  return (
    <RestrictedRoute>
      <Main>
        Hello from Dashboard
        <ul>
          {posts.map((aPost) => (
            <li key={aPost.id}>
              {aPost.title}: {aPost.description}
            </li>
          ))}
        </ul>
      </Main>
      ;
    </RestrictedRoute>
  );
}

export default Dashboard;
