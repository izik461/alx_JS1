import Head from "next/head"
import Main from "@/components/layouts/main"
export default function ResultsPage({repositoryName}) {
  return (
    <Main>
      <Head>
        <title>
          Results page for {repositoryName}
          </title>
          </Head>
          <div className="w-2/3 mx-auto">
        <h1 className="text-center">Search for: <span className="font-bold">
        {repositoryName}</span></h1>
        <ul className="mt-8">
          <li className="m-2 p-2 rounded border-2 border-gray-200">
            <h2 className="text-xl mb-2">tekst</h2>
            <p>desription </p>
          </li>
        </ul>
      </div>
    </Main>
  )
}

export async function getServerSideProps(context) {
  console.log(context.req);
  return {
    props: {
      repositoryName: context.params.query // - "query jest sprzęzone z nazwa pliku [query].js"
    }, 
  }
}