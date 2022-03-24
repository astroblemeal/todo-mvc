import React, { useEffect, useState } from 'react'
import { plainToClass } from 'class-transformer'
import { TodosModel } from '@models/Todo/TodosModel'
import { TodosListPageProps } from './interface'
import { fetchTodos } from '@client/collections/Todos/fetchTodos'
import { CircularProgress } from '@mui/material'

const withTodosListPage = (Component: React.FC<TodosListPageProps>) => {
  function Hoc() {
    const [todos, setTodos] = useState([])

    const data = plainToClass(TodosModel, {
      entries: todos,
      links: 'f',
      size: todos.length,
    })

    useEffect(() => {
      fetchTodos(setTodos)
    }, [])

    const centerThis = {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
    }

    const isLoading = !todos.length

    if (isLoading) {
      return (
        <div style={centerThis}>
          <CircularProgress />
        </div>
      )
    }

    const newProps = {
      data,
      isLoading,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withTodosListPage }
