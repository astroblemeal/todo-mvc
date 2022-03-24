import { TodosModel } from '@models/Todo/TodosModel'

export type TodosListPageProps = {
  data: TodosModel | undefined
  isLoading: boolean
}
