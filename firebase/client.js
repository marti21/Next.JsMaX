import firebase from 'firebase/compat/app' // Importa firebase/compat/app en lugar de 'firebase/app'
import 'firebase/compat/auth'
import 'firebase/firestore'
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAEgbgup0gfFJePdU3laYX39oB9rVMUL0I',
  authDomain: 'martiappnextjs.firebaseapp.com',
  projectId: 'martiappnextjs',
  storageBucket: 'martiappnextjs.appspot.com',
  messagingSenderId: '1081296308550',
  appId: '1:1081296308550:web:1af33d61c3acf13937bd47',
  measurementId: 'G-SBYTXWWNVN'
}

!firebase.apps.length &&
    firebase.initializeApp(firebaseConfig)

const database = firebase.firestore()

export const mapUserFromFirebaseAuth = (user) => {
  const { displayName, email, photoURL, uid } = user
  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid
  }
}

export const onAuthStateChangedUser = (onChange) => {
  return firebase
    .auth()
    .onAuthStateChanged(user => {
      const normalizedUser = user ? mapUserFromFirebaseAuth(user) : null
      onChange(normalizedUser)
    })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
    // return firebase.auth().signInWithRedirect(githubProvider)
    // .then(user => {
  //  return mapUserFromFirebaseAuth(user)
    // })
}

export const addDevit = ({avatar, content, userId, userName}) => {
  return database.collection('devits').add({
    avatar,
    content,
    userId,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0
  })
}

export const fetchLatestDevits = () => {
  return database.collection('devits').orderBy('createdAt', 'desc')
  .get()
  .then(({ docs }) => {
    return docs.map(doc => {
      const data = doc.data()
      const id = doc.id
      const { createdAt } = data
      
      // const intl = new Intl.DateTimeFormat('es-ES')
      // const date = new Date(createdAt.seconds * 1000)
      // const normalizedCretedAt = intl.format(date)

      // se devuelva la id del documento y con los ... se envian todos los campos del document
      return {
        ...data,
        id,
        // Esto devuelve el timestamp con el unario (+)
        createdAt: +createdAt.toDate()
      }
    })
  })
}
