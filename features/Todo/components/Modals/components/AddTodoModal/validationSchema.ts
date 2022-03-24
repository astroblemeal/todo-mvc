import * as yup from 'yup'

export const AddTodoValidationSchema = yup.object().shape({
  mainText: yup.string().required('** Required'),
  secondaryText: yup.string(),
  status: yup.boolean(),
})
