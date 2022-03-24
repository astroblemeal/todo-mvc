import React from 'react'
import { IconButton } from '@mui/material'
interface RoundIconButtonProps {
  onClick?: any
  children: any
  size?: any
  className?: any
}
function RoundIconButton({
  onClick,
  children,
  size,
  className,
}: RoundIconButtonProps) {
  return (
    <IconButton onClick={onClick} size={size} className={className}>
      {children}
    </IconButton>
  )
}

export default RoundIconButton
