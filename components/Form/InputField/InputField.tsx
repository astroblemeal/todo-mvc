import { TextField } from '@mui/material'
import { InputFieldProps } from './interface'
import { withInputField } from './withInputField'

const InputField = ({
  isMultiLine = false,
  variant,
  label,
  placeholder,
  errorMessage,
  rows,
  name,
  ...props
}: InputFieldProps) => {
  return (
    <TextField
      helperText={errorMessage}
      label={label}
      placeholder={placeholder}
      multiline={isMultiLine}
      rows={rows}
      sx={{ py: 1 }}
      name={name}
      variant={variant}
      {...props}
    />
  )
}

export default withInputField(InputField)
