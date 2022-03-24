import Todo from '@features/Todo/components/TodoBox/components/Todo/'
import { TodoBoxProps } from '@features/Todo/components/TodoBox/interface'
import { withTodoBox } from '@features/Todo/components/TodoBox/withTodoBox'

function TodoBox(props: TodoBoxProps) {
  return <Todo {...props} />
}

export default withTodoBox(TodoBox)
