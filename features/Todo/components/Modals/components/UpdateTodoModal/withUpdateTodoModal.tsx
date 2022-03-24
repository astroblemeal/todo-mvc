import React, { useContext } from 'react'
import { mutateUpdateTodo } from '@client/collections/Todos/updateTodo'
import { ModalContext } from '@contexts/ModalContext'
import { TodoFormModel } from '@models/FormModels/TodoFormModel'
import { UpdateTodoModalAcceptProps, UpdateTodoModalProps } from './interface'
import * as yup from 'yup'

const withUpdateTodoModal = (Component: React.FC<UpdateTodoModalProps>) => {
  function Hoc(data: UpdateTodoModalAcceptProps) {
    const {
      currentTodoId,
      setIsOpenUpdateModal,
      isOpenUpdateModal,
    } = useContext(ModalContext)

    const currTodo = data.data.find((x) => x.id === currentTodoId)

    const initialValues = {
      mainText: currTodo?.mainText,
      secondaryText: currTodo?.secondaryText,
      status: currTodo?.status,
    }

    const updateTodo = (formData: TodoFormModel) => {
      mutateUpdateTodo(formData, currentTodoId)
      setIsOpenUpdateModal(false)
    }

    const newProps = {
      initialValues,
      updateTodo,
      isOpenUpdateModal,
      setIsOpenUpdateModal,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withUpdateTodoModal }
