import { Client } from './Client'

export interface ClientRepository {
  getAll: () => Promise<Client[]>
  save: (client: Client) => Promise<Client | undefined>
  delete: (client: Client) => Promise<void>
}
