import Head from "next/head"
import Main from "@/components/layouts/main"
export default function ResultsPage({title}) {
  return (
    <Main>
      <Head>
        <title>
          Results page for {title}
          </title>
          </Head>
      <h1>Hello results {title}</h1>
    </Main>
  )
}

export async function getServerSideProps(context) {
  console.log(context.req);
  return {
    props: {
      title: context.params.query // - "query jest sprzęzone z nazwa pliku [query].js"
    }, 
  }
}