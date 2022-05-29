import fetch from "node-fetch"

export default function performGraphQLQuery(query) {
  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
    },
    body:JSON.stringify({ query })
  })
    .then(response => response.json())
    .catch(() => {
      console.log('Error catched in api.js-performGraphQLQuery')
      return {
        props: {
          error: `Cannot perform query with params ${context.params.query}`
        }
      }
    })
}