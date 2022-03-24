import Head from 'next/head'
import styles from './TodoPage.module.css'
import { withTodosListPage } from '@features/Todo/pages/TodosListPage/withTodosListPage'
import { TodosListPageProps } from '@features/Todo/pages/TodosListPage/interface'
import TodoBox from '@features/Todo/components/TodoBox'
import ToolBar from '@features/Todo/components/ToolBar'
import TodoModals from '@features/Todo/components/Modals'

function TodoListPage({ data }: TodosListPageProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo MVC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToolBar />

      <div className={styles.main}>
        {data?.entries.map((item) => (
          <TodoBox key={item.id} {...item} />
        ))}
      </div>
      <TodoModals data={data} />
    </div>
  )
}

export default withTodosListPage(TodoListPage)
