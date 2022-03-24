import React, { useContext } from 'react'
import { addTodoToDb } from '@client/collections/Todos/addTodoToDb'
import { initialValues } from './initialValues'
import { AddTodoModalProps } from './interface'
import { ModalContext } from '@contexts/ModalContext'

const withAddTodoModal = (Component: React.FC<AddTodoModalProps>) => {
  function Hoc() {
    const { setIsOpenAddModal, isOpenAddModal } = useContext(ModalContext)

    const addTodo = async (formValue) => {
      await addTodoToDb(formValue)
      setIsOpenAddModal(false)
    }

    const newProps = {
      initialValues,
      addTodo,
      setIsOpenAddModal,
      isOpenAddModal,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withAddTodoModal }
