import { firestore } from '@/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

/**
 * Servicio para manejar operaciones relacionadas con Firestore.
 */
export class FirestoreService {
  /**
   * Crea un documento en Firestore.
   * @param collection - Nombre de la colección (por ejemplo, 'user' o 'company').
   * @param uid - ID único del documento.
   * @param data - Datos a guardar en el documento.
   * @returns Promesa que resuelve cuando el documento se ha creado.
   */
  async addDocument(collectionId: string, data: Record<string, any>, documentId?: string): Promise<string | null> {
    try {
      const docRef = doc(firestore, collectionId, documentId || data.uid);
      await setDoc(docRef, data);
      return docRef.id;
    } catch (error) {
      console.error('Error adding document:', error);
      return null;
    }
  }
}
