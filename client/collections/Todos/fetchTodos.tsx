import { TodoModel } from '@models/Todo/TodoModel'
import { plainToClass } from 'class-transformer'
import { db } from '../../../firebase'

export const fetchTodos = (setTodos) => {
  db.collection('entries').onSnapshot((snapshot) => {
    plainToClass(
      TodoModel,
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          mainText: doc.data().mainText,
          secondaryText: doc.data().secondaryText,
          status: doc.data().status,
        })),
      ),
    )
  })
}
