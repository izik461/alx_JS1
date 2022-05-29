export const getRepositoriesFromSearch = query => {
  return `{
    search(query: "${query}", type: REPOSITORY, first: 5) {
      edges {
        node {
          ... on Repository {
            id
            name
            description
            owner {
              login
              avatarUrl
            }
            stargazerCount
          }
        }
      }
    }
  }`
}
