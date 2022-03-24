import { db } from '../../../firebase'

export const fetchTodos = (setTodos) => {
  db.collection('entries').onSnapshot((snapshot) => {
    setTodos(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        mainText: doc.data().mainText,
        secondaryText: doc.data().secondaryText,
        status: doc.data().status,
      })),
    )
  })
}
