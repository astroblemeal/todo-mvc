import styles from './ToolBar.module.css'
import PencilIcon from '@components/Icons/PencilIcon'
import RoundIconButton from '@components/RoundIconButton/RoundIconButton'
import { ToolBarProps } from './interface'
import { withToolBar } from './withToolBar'

function ToolBar({ setIsOpenAddModal }: ToolBarProps) {
  return (
    <div className={styles.toolBar}>
      <RoundIconButton onClick={() => setIsOpenAddModal(true)} size="large">
        <PencilIcon width={40} height={40} />
      </RoundIconButton>
    </div>
  )
}

export default withToolBar(ToolBar)
