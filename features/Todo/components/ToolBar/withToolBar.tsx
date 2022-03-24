import { ToolBarProps } from './interface'
import React, { useContext, useState } from 'react'
import { ModalContext } from '@contexts/ModalContext'

const withToolBar = (Component: React.FC<ToolBarProps>) => {
  function Hoc() {
    const { setIsOpenAddModal, isOpenAddModal } = useContext(ModalContext)

    const newProps = {
      setIsOpenAddModal,
      isOpenAddModal,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withToolBar }
