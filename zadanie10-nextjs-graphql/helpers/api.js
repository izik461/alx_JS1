import fetch from "node-fetch"

function myThrowFunction() {
  throw 'Sample error from myThrowFunction-api.js'
}

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
    .then(() => {
      console.log('will now throw an error from api.js')
      return myThrowFunction()
    }) //TODO:JS
    .catch((error) => {
      console.log(`Error catched in api.js-performGraphQLQuery - ${error}`)
      return {
        props: {
          error: `Cannot perform query with params ${query}`
        }
      }
    })
}