import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  onValue,
  ref as fBRef,
  set,
  get as FBGet,
} from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export const observe = (url, callback) =>
  onValue(fBRef(database, url), (snapshot) => {
    const data = snapshot.val();
    // przekazalismy setMessages jako callback, poniewaz chcemy uruchomic ta funkcje za kazdym razem jak zmieniaja sie dane
    callback(Object.values(data ?? {}));
  });

export const save = (url, data) => {
  const newRecordId = Date.now();

  return set(fBRef(database, `${url}${newRecordId}`), {
    id: newRecordId,
    ...data,
  });
};

export const get = (url) =>
  FBGet(fBRef(url, database)).then((data) => data.val());

export const update = (url, data) => set(fBRef(database, url, data));
