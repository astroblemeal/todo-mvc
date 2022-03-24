import { TodoFormModel } from '@models/FormModels/TodoFormModel'
import { db } from '../../../firebase'

export const addTodoToDb = (formValue: TodoFormModel) => {
  db.collection('entries').add({
    mainText: formValue?.mainText,
    secondaryText: formValue?.secondaryText,
    status: formValue?.status,
  })
}
