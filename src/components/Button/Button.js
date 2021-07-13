import React from 'react';
import {Button} from '@material-ui/Button'

const Button =({title})=>{
  
  return (
    <Button 
    className='btn'
    variant ="contained"
    colour="primary"
      >
      {title}
      </Button>
  )
}
export default Button;