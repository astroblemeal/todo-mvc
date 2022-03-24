import { db } from '../../../firebase'

export const deleteTodo = (id: string) => {
  db.collection('entries').doc(id).delete()
}
