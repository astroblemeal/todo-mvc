export interface TodoProps {
  handleCrud: (action: string) => void
  id: string
  mainText: string
  secondaryText: string
  status: boolean
  setIsOpenUpdateModal: React.Dispatch<React.SetStateAction<boolean>>
  isOpenUpdateModal: boolean
  handleUpdateModal: (string: string, boolean: boolean) => void
}
