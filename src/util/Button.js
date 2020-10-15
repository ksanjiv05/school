import React from 'react'
import Util from './Util'

export const Button = ({ color, value, exclassName }) => {
  return (
    <input type="button" style={Object.assign(Util.Button, Util.Font, exclassName)} className="form-control " value={value} />

  )
}
