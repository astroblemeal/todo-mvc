import React, { Fragment } from 'react'
import { TodosModel } from '@models/Todo/TodosModel'
import AddTodoModal from '@features/Todo/components/Modals/components/AddTodoModal'
import UpdateTodoModal from '@features/Todo/components/Modals/components/UpdateTodoModal'

interface TodoModalProps {
  data: TodosModel | undefined
}
function TodoModals({ data }: TodoModalProps) {
  return (
    <Fragment>
      <AddTodoModal />
      <UpdateTodoModal data={data?.entries} />
    </Fragment>
  )
}

export default TodoModals
