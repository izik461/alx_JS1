import Head from "next/head"
import Main from "@/components/layouts/main"
import Image from "next/image"
import Link from "next/link"
import { getRepositoriesFromSearch } from "@/helpers/queries"
import performGraphQLQuery from "@/helpers/api"
export default function ResultsPage({repositoryName, results}) {
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
  {result.node.owner.avatar_url && <Image width="30px" height="30px" className="w-10 rounded" src={result.node.owner.avatar_url} alt="avatar"/>}
  <h2 className="text-xl ml-2">{result.node.owner.login}</h2>
</div>
<p className="mt-4">{result.node.description} </p>
<p className="absolute top-2 right-2"> &#9733; {result.node.stargazerCount}</p>
<Link href={`/repository/${result.node.owner.login}-${result.node.name}`}>
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
  const query = getRepositoriesFromSearch(context.params.query);

  try {
    const result = await performGraphQLQuery(query)
    console.log(result)
const error = props.error
    return {
      props: {
        title: context.params.query,
        results: ["TODO:JS - results from proper return"]
      }
    }
  } catch(error) {
    console.log(`Catched error in results.js - ${error}`);
    return {
      props: {
        results: []
      }
    }
  }
}