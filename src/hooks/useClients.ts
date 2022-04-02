import { Client } from 'core/Client'
import { ClientRepository } from 'core/ClientRepository'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { ClientCollection } from '../firebase/ClientCollection'
import { useTableOrForm } from './useTableOrForm'

export function useClients() {
  const [clients, setClients] = useState<Client[]>([])
  const [client, setClient] = useState<Client>(Client.empty())

  const { showTable, showForm, isTableVisible } = useTableOrForm()

  const clientRepository: ClientRepository = new ClientCollection()

  const getAll = useCallback(async () => {
    const clientRepository: ClientRepository = new ClientCollection()
    await clientRepository.getAll().then((clients) => {
      setClients(clients)
      showTable()
    })
  }, [showTable])

  useEffect(() => {
    getAll()
  }, [getAll])

  function selectClient(client: Client) {
    setClient(client)
    showForm()
  }

  function createClient() {
    setClient(Client.empty())
    showForm()
  }

  async function deleteClient(client: Client) {
    await clientRepository.delete(client)
    await getAll()

    toast.error('Client deleted!')
  }

  async function saveClient(client: Client) {
    await clientRepository.save(client)
    await getAll()

    toast.success('Client saved!')
  }

  return {
    clients,
    client,
    isTableVisible,
    showTable,
    selectClient,
    createClient,
    deleteClient,
    saveClient
  }
}
