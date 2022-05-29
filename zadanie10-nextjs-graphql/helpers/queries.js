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

export const getRepositoryDetails = (userName, repoName) => {
  return `{
      repository(name: "${repoName}", owner: "${userName}") {
        description
    }
  }
    `
}