import Head from "next/head"
import Main from "@/components/layouts/main"
import {getRepositoryDetails} from "@/helpers/queries"
import performGraphQLQuery from "@/helpers/api"

export default function RepositoryDetails({ownerName, repositoryName, results}) {
  return (
    <Main>
      <Head>
        <title>
          Repository details for {ownerName}-{repositoryName}
          </title>
          </Head>
          <div className="mx-auto">
        <h1 className="text-center">Repository details for: <span className="font-bold">
        {ownerName}-{repositoryName}</span></h1>
<div className="mt-10">{results.message}</div>
      </div>
    </Main>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}
  }
//   // const [ownerName, repoName] = context.params.query.split('-');
//   let [ownerName, ...repoName] = context.params.query.split('-')
// repoName = second.join('-')

//   const query = getRepositoryDetails(ownerName, repoName);

//   try {
//     const result = await performGraphQLQuery(query)
//     console.log(result)

//     return {
//       props: {
//         ownerName: ownerName,
//          repositoryName: repoName,
//           results: result
//       }
//     }
//   } catch(error) {
//     console.log(`Catched error in results.js - ${error}`);
//     return {
//       props: {}
//     }
//   }
}