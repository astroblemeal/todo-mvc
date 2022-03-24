import { db } from '../../../firebase'

export const mutateTodoStatus = (id: string, boolean: boolean) => {
  db.collection('entries').doc(id).set(
    {
      status: boolean,
    },
    { merge: true },
  )
}
