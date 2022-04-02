import { Client } from 'core/Client'
import { ActionButton } from './ActionButton'

interface ClientsTableProps {
  clients: Client[]
  selectClient?: (client: Client) => void
  deleteClient?: (client: Client) => void
}

export function ClientsTable({
  clients,
  selectClient,
  deleteClient
}: ClientsTableProps) {
  const isRenderActions = selectClient || deleteClient

  function renderTableHeader() {
    return (
      <thead
        className="
        text-gray-100
          bg-gradient-to-r from-indigo-500 to-indigo-700
        "
      >
        <tr>
          <th className="text-left p-4">ID</th>
          <th className="text-left p-4">Name</th>
          <th className="text-left p-4">Email</th>
          {isRenderActions && <th className="text-center p-4">Actions</th>}
        </tr>
      </thead>
    )
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center py-2">
        {selectClient && (
          <ActionButton client={client} variant="edit" onClick={selectClient} />
        )}

        {deleteClient && (
          <ActionButton
            client={client}
            variant="delete"
            onClick={deleteClient}
          />
        )}
      </td>
    )
  }

  function renderClientsData() {
    return clients.map((client) => (
      <tr key={client.id} className="odd:bg-indigo-200 even:bg-indigo-100">
        <td className="text-left p-4 font-bold">{client.id}</td>
        <td className="text-left p-4 font-bold">{client.name}</td>
        <td className="text-left p-4 font-bold">{client.email}</td>
        {isRenderActions && renderActions(client)}
      </tr>
    ))
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      {renderTableHeader()}
      <tbody>{renderClientsData()}</tbody>
    </table>
  )
}
