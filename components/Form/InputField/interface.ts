import { FieldInputProps, FieldMetaProps } from 'formik'

export type InputFieldAcceptProps = {
  name: string
}

export type InputFieldProps = {
  name: string
  variant: 'outlined' | 'standard' | 'filled'
  isMultiLine: boolean
  label: string
  placeholder: string
  errorMessage: string
  rows: number
}
