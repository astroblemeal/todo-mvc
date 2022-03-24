import * as yup from 'yup'

const UpdateTodoValidationSchema = yup.object().shape({
  mainText: yup.string().required('** Required'),
  secondaryText: yup.string(),
  status: yup.boolean(),
})
export default UpdateTodoValidationSchema
