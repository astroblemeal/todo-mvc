import InputField from '@components/Form/InputField/InputField'
import PrimaryButton from '@components/PrimaryButton'
import { Dialog, DialogTitle } from '@mui/material'
import { Form, Formik } from 'formik'
import { AddTodoModalProps } from './interface'
import styles from './AddTodoModal.module.css'
import { AddTodoValidationSchema } from './validationSchema'
import { withAddTodoModal } from './withTodoModal'

function AddTodoModal({
  setIsOpenAddModal,
  isOpenAddModal,
  initialValues,
  addTodo,
}: AddTodoModalProps) {
  return (
    <Dialog
      className={styles.todoModal}
      open={isOpenAddModal}
      onClose={() => setIsOpenAddModal(false)}
    >
      <div className={styles.addTodoModalContainer}>
        <DialogTitle>Add Todo</DialogTitle>

        <Formik
          validationSchema={AddTodoValidationSchema}
          initialValues={initialValues}
          onSubmit={addTodo}
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
                  title="Add Todo"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Dialog>
  )
}

export default withAddTodoModal(AddTodoModal)
