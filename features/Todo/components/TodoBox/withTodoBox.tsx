import React from 'react'
import { TodoModel } from '@models/Todo/TodoModel'
import { TodoBoxProps } from '@features/Todo/components/TodoBox//interface'

const withTodoBox = (Component: React.FC<TodoBoxProps>) => {
  function Hoc(props: TodoModel) {
    const newProps = {
      ...props,
    }
    return <Component {...newProps} />
  }

  return Hoc
}

export { withTodoBox }
