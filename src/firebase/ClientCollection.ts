import { Client } from 'core/Client'
import { ClientRepository } from 'core/ClientRepository'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  QueryDocumentSnapshot,
  setDoc,
  SnapshotOptions
} from 'firebase/firestore'
import { firestoreDb } from './config'

export class ClientCollection implements ClientRepository {
  #converter = {
    toFirestore: (client: Client) => {
      return {
        name: client.name,
        email: client.email
      }
    },
    fromFirestore: (
      snapshot: QueryDocumentSnapshot,
      options: SnapshotOptions
    ) => {
      const data = snapshot.data(options)

      if (data) {
        return new Client(data.name, data.email, snapshot.id)
      }

      return Client.empty()
    }
  }

  #colection() {
    return collection(firestoreDb, 'clients').withConverter(this.#converter)
  }

  async getAll(): Promise<Client[]> {
    const querySnapshot = await getDocs(this.#colection())

    return querySnapshot.docs.map((doc) => doc.data() as Client)
  }

  async save(client: Client): Promise<Client | undefined> {
    if (client.id) {
      try {
        const clientRef = doc(firestoreDb, 'clients', client.id).withConverter(
          this.#converter
        )

        await setDoc(clientRef, client)

        return client
      } catch (error) {
        console.error('Error updating document: ', error)
      }
    }

    try {
      const docRef = await addDoc(this.#colection(), client)

      return new Client(client.name, client.email, docRef.id)
    } catch (error) {
      console.error('Error adding document: ', error)
    }
  }

  async delete(client: Client): Promise<void> {
    if (client.id)
      return await deleteDoc(doc(firestoreDb, 'clients', client.id))
  }
}
