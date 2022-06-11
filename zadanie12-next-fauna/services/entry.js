const ENTRIES_PATH = '/api/entries'

export const putEntry = (payload) => {
console.log('PutEntry Payload: ', payload)
  return fetch(ENTRIES_PATH, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => (res.ok ? res.json() : Promise.reject(res)))
};