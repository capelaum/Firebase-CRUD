import { Button } from 'components/Button'
import { ClientsTable } from 'components/ClientsTable'
import { Container } from 'components/Container'
import { Form } from 'components/Form'
import { PlusIcon } from 'components/icons'
import { Client } from 'core/Client'
import { ClientRepository } from 'core/ClientRepository'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { ClientCollection } from '../firebase/ClientCollection'

const Home: NextPage = () => {
  const [visible, setVisible] = useState<'table' | 'form'>('table')
  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])

  const clientRepository: ClientRepository = new ClientCollection()

  const getAll = useCallback(async () => {
    const clientRepository: ClientRepository = new ClientCollection()
    await clientRepository.getAll().then((clients) => {
      setClients(clients)
      setVisible('table')
    })
  }, [])

  useEffect(() => {
    getAll()
  }, [getAll])

  function selectClient(client: Client) {
    console.log('selectClient', client)
    setClient(client)
    setVisible('form')
  }

  function createClient() {
    setClient(Client.empty())
    setVisible('form')
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

  return (
    <>
      <Head>
        <title>FIREBASE CRUD</title>

        <meta name="description" content="TailwindCSS Next Template" />
      </Head>

      <main
        className="
            min-h-screen
            flex flex-col flex-grow items-center justify-center
            bg-hero-moon p-20
          "
      >
        <Container title="Firebase CRUD">
          {visible === 'table' ? (
            <>
              <div className="flex justify-start">
                <Button className="mb-4" color="green" onClick={createClient}>
                  {PlusIcon}
                  <span className="pl-2">New Client</span>
                </Button>
              </div>
              <ClientsTable
                clients={clients}
                selectClient={selectClient}
                deleteClient={deleteClient}
              />
            </>
          ) : (
            <Form
              client={client}
              cancel={() => setVisible('table')}
              saveClient={saveClient}
            />
          )}
        </Container>
      </main>
    </>
  )
}

export default Home
