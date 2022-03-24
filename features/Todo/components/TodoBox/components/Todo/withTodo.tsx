import { deleteTodo } from '@client/collections/Todos/deleteTodo'
import { mutateTodoStatus } from '@client/collections/Todos/mutateResolveTodo'
import { ModalContext } from '@contexts/ModalContext'
import { TodoModel } from '@models/Todo/TodoModel'
import { useContext } from 'react'

const withTodo = (Component: React.FC<TodoModel>) => {
  function Hoc(props: TodoModel) {
    const {
      setIsOpenUpdateModal,
      setIsOpenAddModal,
      handleUpdateModal,
    } = useContext(ModalContext)

    const handleCrud = (action) => {
      if (action === 'DELETE') {
        deleteTodo(props.id)
      } else if (action === 'RESOLVE') {
        mutateTodoStatus(props.id, !props.status)
      }
    }
    const newProps = {
      ...props,
      handleCrud,
      handleUpdateModal,
      setIsOpenUpdateModal,
      setIsOpenAddModal,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withTodo }
