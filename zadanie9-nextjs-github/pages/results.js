import Head from "next/head"
export default function ResultsPage({title}) {
  return (
    <div>
      <Head>
        <title>
          Results page for {title}
          </title>
          </Head>
      <h1>Hello results</h1>
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      title: 'TODO:JS title from props for ResultsPage'
    }, 
  }
}