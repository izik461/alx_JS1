import Head from 'next/head'
import Main from '@/components/layouts/main'
import Link from 'next/link'

export default function Home() {
 return (
   <Main>
     <Head>
       <title>index page index.js-Head-title</title>
     </Head>
     <h1>Hello index.js</h1>  
     <Link href="/results">Go to Results from index.js</Link>
   </Main>
 )
}