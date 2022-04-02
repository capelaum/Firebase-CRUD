import { Button } from 'components/Button'
import { ClientsTable } from 'components/ClientsTable'
import { Container } from 'components/Container'
import { Form } from 'components/Form'
import { PlusIcon } from 'components/icons'
import { useClients } from 'hooks/useClients'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  const {
    clients,
    client,
    isTableVisible,
    showTable,
    selectClient,
    createClient,
    deleteClient,
    saveClient
  } = useClients()

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
          {isTableVisible ? (
            <>
              <div className="flex justify-start">
                <Button className="mb-5" color="green" onClick={createClient}>
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
              cancel={() => showTable()}
              saveClient={saveClient}
            />
          )}
        </Container>
      </main>
    </>
  )
}

export default Home
