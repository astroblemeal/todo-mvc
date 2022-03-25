import { Button } from '@mui/material'
import React from 'react'

interface ButtonProps {
  onClick?: () => void
  isDisabled: boolean
  type?: 'submit' | 'button'
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
  variant: 'text' | 'outlined' | 'contained'
  title: string
}

function PrimaryButton({
  onClick,
  isDisabled,
  type,
  color,
  variant,
  title,
}: ButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={isDisabled}
      type={type}
      variant={variant}
      color={color}
    >
      {title}
    </Button>
  )
}

export default PrimaryButton
