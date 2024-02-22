import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: 'AIzaSyBqQx0TWTuy2kMtlLStWsqPgpkVUApGC8U',
//   authDomain: 'bts-medium-clone.firebaseapp.com',
//   projectId: 'bts-medium-clone',
//   storageBucket: 'bts-medium-clone.appspot.com',
//   messagingSenderId: '363687063805',
//   appId: '1:363687063805:web:c672144a3099bc79598e94',
// }

const firebaseConfig = {
  apiKey: "AIzaSyBaKmaSg5c_Q70mgHERuTgcpnEbpKOBOoA",
  authDomain: "blog-30c69.firebaseapp.com",
  projectId: "blog-30c69",
  storageBucket: "blog-30c69.appspot.com",
  messagingSenderId: "28535898548",
  appId: "1:28535898548:web:327e7b3ff38fe70f3bb2e1",
  measurementId: "G-5BJXF6NGE8"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }
