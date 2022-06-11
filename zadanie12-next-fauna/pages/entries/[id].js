export default function EntryDetails({ entryDetails }) {
  return (
    <MainLayout>
      <h1>ENTRY DETAILS PAGE</h1>
      console.log(`EntryDetails: ${entryDetails}`)
    </MainLayout>
  )
}

export async function getStaticProps({ req }) {
  return {
    props: {
      entryDetails: getGuestbookEntryDetails(req.id)
    },
  }
}