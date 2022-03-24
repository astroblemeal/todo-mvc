import { createContext, useState } from 'react'

export const ModalContext = createContext<any>(undefined)

export const ModalProvider = (props) => {
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false)
  const [isOpenAddModal, setIsOpenAddModal] = useState(false)
  const [currentTodoId, setCurrentTodoId] = useState('')

  const handleUpdateModal = (id: string, boolean: boolean) => {
    setIsOpenUpdateModal(boolean)
    setCurrentTodoId(id)
  }
  return (
    <ModalContext.Provider
      value={{
        isOpenAddModal,
        setIsOpenAddModal,
        isOpenUpdateModal,
        setIsOpenUpdateModal,
        handleUpdateModal,
        currentTodoId,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}
