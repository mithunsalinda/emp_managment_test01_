import React from 'react'
import { Button } from '@mui/material'
/**
* @author
* @function InputButton
**/

export const InputButton = (props) => {
    const { variant, buttonName, onPress } = props
    return (
        <Button variant={variant} onClick={onPress}>{buttonName}</Button>
    )

}