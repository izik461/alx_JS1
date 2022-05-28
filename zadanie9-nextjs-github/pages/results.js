import Head from "next/head"
import Main from "./components/layouts/main"
export default function ResultsPage({title}) {
  return (
    <Main>
      <Head>
        <title>
          Results page for {title}
          </title>
          </Head>
      <h1>Hello results</h1>
    </Main>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      title: 'TODO:JS title from props for ResultsPage'
    }, 
  }
}