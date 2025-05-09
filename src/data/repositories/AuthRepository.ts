import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'

/**
 * Repositorio para manejar las operaciones relacionadas con la autenticación y Firestore.
 */
export class AuthRepository {
  async createUser(email: string, password: string) {
    const auth = getAuth()
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return userCredential.user
  }

  async createDocument(collection: string, uid: string, data: Record<string, any>) {
    const db = getFirestore()
    const docRef = doc(db, collection, uid)
    await setDoc(docRef, data)
  }
}
