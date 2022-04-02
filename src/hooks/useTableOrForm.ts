import { useCallback, useState } from 'react'

export function useTableOrForm() {
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const showTable = useCallback(() => setVisible('table'), [])
  const showForm = useCallback(() => setVisible('form'), [])

  return {
    isTableVisible: visible === 'table',
    isFormVisible: visible === 'form',
    showTable,
    showForm
  }
}
