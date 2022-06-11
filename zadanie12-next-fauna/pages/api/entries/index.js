import { createGuestbookEntry } from '@/lib/fauna'

export default async function handler(req, res) {
  const handlers = {
    GET: async () => {
      console.log('TODO:JS')
    },

    POST: async () => {
      const {
        body: { name, message, secretMessage },
      } = req
      const created = await createGuestbookEntry({
        name,
        message,
        secretMessage,
        createdAt: new Date(),
      })

      res.json(created)
    },
  }

  if (!handlers[req.method]) {
    return res.status(405).end()
  }

  await handlers[req.method]()
}
