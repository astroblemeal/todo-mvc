import { TodoModel } from '@models/Todo/TodoModel'
import { db } from '../../../firebase'

export const mutateUpdateTodo = (data: TodoModel, id: string) => {
  db.collection('entries').doc(id).set(
    {
      mainText: data.mainText,
      secondaryText: data.secondaryText,
      status: data.status,
    },
    { merge: true },
  )
}
