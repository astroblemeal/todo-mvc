import { Dispatch, SetStateAction } from 'react'

export interface ToolBarProps {
  isOpenAddModal: boolean
  setIsOpenAddModal: React.Dispatch<React.SetStateAction<boolean>>
}
