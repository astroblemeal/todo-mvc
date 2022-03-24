import React, { useEffect } from 'react'
import { useField } from 'formik'

const withInputField = (Component: React.FC<any>) => {
  function Hoc(props: any) {
    const [field, meta] = useField(props)
    const newProps = {
      ...props,
      ...meta,
      ...field,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withInputField }
