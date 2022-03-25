import ArrowUpIcon from '@components/Icons/ArrowUpIcon'
import TrashIcon from '@components/Icons/TrashIcon'
import { List, ListItem, ListItemText } from '@mui/material'
import styles from './Todo.module.css'
import { withTodo } from '@features/Todo/components/TodoBox/components/Todo/withTodo'
import CheckMark from '@components/Icons/CheckMark'
import RoundIconButton from '@components/RoundIconButton/RoundIconButton'
import XIcon from '@components/Icons/XIcon'
import { TodoProps } from '@features/Todo/components/TodoBox/components/Todo/interface'

function Todo({
  handleCrud,
  handleUpdateModal,
  mainText,
  secondaryText,
  status,
  id,
}: TodoProps) {
  return (
    <List className={styles.todoList}>
      <ListItem
        className={!!status ? styles.todoListItemResolved : styles.todoListItem}
      >
        <ListItemText primary={mainText} secondary={secondaryText} />
        <RoundIconButton
          onClick={() => handleCrud('RESOLVE')}
          className={styles.btn}
        >
          {!!status ? <XIcon /> : <CheckMark />}
        </RoundIconButton>
        <RoundIconButton
          onClick={() => handleUpdateModal(id, true)}
          className={styles.btn}
        >
          <ArrowUpIcon />
        </RoundIconButton>
        <RoundIconButton
          className={styles.btn}
          onClick={() => handleCrud('DELETE')}
        >
          <TrashIcon />
        </RoundIconButton>
      </ListItem>
    </List>
  )
}

export default withTodo(Todo)
