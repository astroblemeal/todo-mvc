import { Button } from '@mui/material'
import React from 'react'

function PrimaryButton({
  onClick,
  isDisabled,
  type,
  color,
  variant,
  title,
}: any) {
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
