import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

/**
 * Servicio para manejar operaciones relacionadas con Firebase Authentication.
 */
export class FirebaseAuthService {
  /**
   * Crea un usuario en Firebase Authentication.
   * @param email - Correo electrónico del usuario.
   * @param password - Contraseña del usuario.
   * @returns Promesa que resuelve con los datos del usuario creado.
   */
  async createUser(email: string, password: string) {
    const auth = getAuth()
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return userCredential.user
  }
}
