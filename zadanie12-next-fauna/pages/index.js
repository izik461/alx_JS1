import { useState } from 'react'
import cn from 'classnames'
// import useSWR, { mutate } from 'swr'
import { listGuestbookEntries } from '@/lib/fauna'
import EntryItem from '@/components/EntryItem'
import EntryForm from '@/components/EntryForm'
import MainLayout from '@/components/MainLayout'
import { putEntry } from '@/services/entry'

const Guestbook = ({ entries }) => {
  const [finalEntries, setFinalEntries] = useState(entries)

  const onSubmit = async (entryData) => {
    console.log('tapped on Submit: ', entryData)
    const newEntry = await putEntry(entryData)
    console.log('NewEntry: ', newEntry)
    setFinalEntries([newEntry.createGuestbookEntry, ...finalEntries])
  }

  return (
    <MainLayout>
      <div
        className={cn(
          'border border-blue-200 rounded p-6',
          'my-4 w-full dark:border-gray-800 bg-blue-50',
          'dark:bg-blue-opaque'
        )}
      >
        <h5
          className={cn(
            'text-lg md:text-xl font-bold',
            'text-gray-900 dark:text-gray-100'
          )}
        >
          Sign the Guestbook
        </h5>
        <p className="my-1 text-gray-800 dark:text-gray-200">
          Share a message for a future visitor.
        </p>
        <EntryForm onSubmit={onSubmit} />
      </div>
      <div className="mt-4 space-y-8 px-2">
        {finalEntries?.map((entry) => (
          <EntryItem key={entry._id} entry={entry} />
        ))}
      </div>
    </MainLayout>
  )
}

export const getStaticProps = async () => ({
  props: {
    entries: await listGuestbookEntries(),
  },
  revalidate: 1,
})

export default Guestbook
