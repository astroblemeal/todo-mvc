import styles from './UpdateTodoModal.module.css'
import InputField from '@components/Form/InputField/InputField'
import PrimaryButton from '@components/PrimaryButton'
import { Dialog, DialogTitle } from '@mui/material'
import { Form, Formik } from 'formik'
import { UpdateTodoModalProps } from '@features/Todo/components/Modals/components/UpdateTodoModal/interface'
import { withUpdateTodoModal } from '@features/Todo/components/Modals/components/UpdateTodoModal/withUpdateTodoModal'
import UpdateTodoValidationSchema from './validationSchema'

function UpdateTodoModal({
  isOpenUpdateModal,
  setIsOpenUpdateModal,
  initialValues,
  updateTodo,
}: UpdateTodoModalProps) {
  return (
    <Dialog
      className={styles.todoModal}
      open={isOpenUpdateModal}
      onClose={() => setIsOpenUpdateModal(false)}
    >
      <div className={styles.addTodoModalContainer}>
        <DialogTitle>Update Todo</DialogTitle>

        <Formik
          validationSchema={UpdateTodoValidationSchema}
          initialValues={initialValues}
          onSubmit={updateTodo}
        >
          {(formik) => (
            <Form>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '10px',
                }}
              >
                <InputField
                  placeholder="Title"
                  label="Title"
                  variant="outlined"
                  name="mainText"
                  errorMessage={formik.errors.mainText}
                />

                <InputField
                  placeholder="Jot something down..."
                  label="Description"
                  rows={6}
                  multiline={true}
                  variant="outlined"
                  name="secondaryText"
                />
                <PrimaryButton
                  isDisabled={!!formik.errors.mainText}
                  type="submit"
                  variant="contained"
                  color="secondary"
                  title="Update Todo"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Dialog>
  )
}

export default withUpdateTodoModal(UpdateTodoModal)
