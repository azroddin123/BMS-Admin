import React from 'react'

const Card = (props : any) => {
  return (
    <div {...props} style = {{
        background : 'linear-gradient(180deg, #FFFFFF 0%, #FDE8FF 100%)',
        padding  : '0.5rem 1rem',
        // minHeight : '25rem',
        border : '1px gray solid',
        borderRadius : '1rem',
        ...props.style
    }}  />
  )
}

export default Card