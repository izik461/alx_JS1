import Head from "next/head"
import Main from "@/components/layouts/main"
import fetch from "node-fetch"
import Image from "next/image"
import Link from "next/link"
export default function ResultsPage({repositoryName, results}) {

  // console.log(`ResultsPage received results: ${results}`)
  return (
    <Main>
      <Head>
        <title>
          Results page for {repositoryName}
          </title>
          </Head>
          <div className="w-2/3 mx-auto">
        <h1 className="text-center">Search results for: <span className="font-bold">
        {repositoryName}</span></h1>
        <ul className="mt-8">
          {
          results.map(result => {
return <li key={result.id} className="relative m-2 p-2 rounded border-2 border-gray-200">
<div className="flex space-between align-center">
  {result.owner.avatar_url && <Image width="30px" height="30px" className="w-10 rounded" src={result.owner.avatar_url} alt="avatar"/>}
  <h2 className="text-xl ml-2">{result.owner.login}</h2>
</div>
<p className="mt-4">{result.description} </p>
<p className="absolute top-2 right-2"> &#9733; {result.stargazers_count}</p>
<Link href={`/repository/${result.owner.login}-${result.name}`}>
  <span className="block text-red-500 text-right pr-2 mt-2 cursor-pointer">
    See details
  </span>
</Link>
</li>
          })
        }
          
        </ul>
      </div>
    </Main>
  )
}

export async function getServerSideProps(context) {
  console.log(context.req);

  return fetch(`https://api.github.com/search/repositories?q=${context.params.query}`)
.then((res) => res.json())
.then((results => {
  console.log(results)
  return {
    props: {
      repositoryName: context.params.query,
      results: results.items
    }
  }
}))
.catch(error => {
  return {
    props: {
      repositoryName: context.params.query,
      results: 'Could not find results'
    }
  }
})

}