export interface AddTodoModalProps {
  addTodo: (data: InitialValuesType) => void
  setIsOpenAddModal: React.Dispatch<React.SetStateAction<boolean>>
  isOpenAddModal: boolean
  initialValues: InitialValuesType
}

type InitialValuesType = {
  mainText: string
  secondaryText: string
  status: boolean
}
