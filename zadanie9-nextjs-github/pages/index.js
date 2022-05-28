import Head from 'next/head'
import Main from '@/components/layouts/main'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
const [searchValue, setSearchValue] = useState('')

const handleSearchValueChanged = (event) => {
  setSearchValue(event.target.value);
  console.log(`Value changed: ${searchValue}`);
}

const handleButtonClick = (event) => {
  event.preventDefault();
  if (searchValue.length <3) {
    return alert('Please provide a longer name.')
  }
  router.push(`/results/${searchValue}`)
}

 return (
   <Main>
     <Head>
       <title>index page index.js-Head-title</title>
     </Head>
     <h1>Hello index.js</h1>  
     <div className='m-4'></div>
<input type="text" placeholder="search for repository" value={searchValue}
onChange={handleSearchValueChanged}></input>
<button type="button" onClick={handleButtonClick}>Search</button>
     </Main>
 )
}