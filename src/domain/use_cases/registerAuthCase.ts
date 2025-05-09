
import { FirestoreService } from '@/data/services/FirestoreService';
import { auth } from '@/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

//ESTA ES LA CAPA DE  DOMAIN
// EN ESTA CAPA SE MANEJA LA LOGICA DE NEGOCIO Y SEPARA LA LOGICA DE ACCESO A DATOS
// EN ESTA CAPA SE MANEJAN LOS CASOS DE USO
// APARTE ESTE DOCUMENTO ES UN CASO DE USO PARA REGISTRAR UN USUARIO USANDO EL REPOSITORIO UserRepository.ts
/**
 * Caso de uso para registrar un usuario.
 * Este caso de uso encapsula la lógica de negocio para registrar un usuario
 * y delega la interacción con la capa de datos al repositorio.
 */

/**
 * Caso de uso para registrar una entidad (usuario o empresa).
 * Este caso de uso encapsula la lógica de negocio para registrar una entidad
 * y delega la interacción con la capa de datos al repositorio.
 */
export class RegisterEntityUseCase {
  private firestoreService: FirestoreService;

  constructor() {
    this.firestoreService = new FirestoreService();
  }

  async execute(entityType: 'user' | 'company', data: { email: string; password: string; [key: string]: any }) {
    if (!['user', 'company'].includes(entityType)) {
      throw new Error('Invalid entity type. Must be "user" or "company".');
    }

    const { email, password, ...firestoreData } = data;

    try {
      // Crear usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      // Agregar datos adicionales a Firestore
      firestoreData.uid = uid;
      firestoreData.entityType = entityType;

      const collectionId = entityType === 'user' ? 'users' : 'companies';
      const documentId = await this.firestoreService.addDocument(collectionId, firestoreData, uid);

      if (!documentId) {
        throw new Error('Failed to create Firestore document.');
      }

      return { uid, email };
    } catch (error) {
      console.error('Error registering entity:', error);
      throw error;
    }
  }
}
