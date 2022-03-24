import { TodoModel } from '@models/Todo/TodoModel'

export interface UpdateTodoModalProps {
  updateTodo: (data: InitialValuesType) => void
  setIsOpenUpdateModal: React.Dispatch<React.SetStateAction<boolean>>
  isOpenUpdateModal: boolean
  initialValues: InitialValuesType
}

export type UpdateTodoModalAcceptProps = {
  data: TodoModel[] | undefined
}

type InitialValuesType = {
  mainText: string
  secondaryText: string
  status: boolean
}
