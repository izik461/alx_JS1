import Head from 'next/head'
import Main from '@/components/layouts/main'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
const [searchValue, setSearchValue] = useState('')

const handleSearchValueChanged = (event) => {
  setSearchValue(event.target.value);
  //console.log(`Value changed: ${searchValue}`);
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
     <div className='border-2 border-gray-500 p-2'>
<input className="w-full border-2 border-gray-500 rounded p-2"
  type="text" placeholder="search for repository" value={searchValue}
onChange={handleSearchValueChanged}></input>
<button type="button" className='rounded bg-red-800 w-full my-3 text-white' onClick={handleButtonClick}>Search</button></div>
     </Main>
 )
}