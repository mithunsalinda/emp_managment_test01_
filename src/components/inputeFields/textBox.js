import { TextField } from '@mui/material'
import React from 'react'

/**
* @author
* @function TextInput
**/

export const TextInput = (props) => {
    const { label, onBlur, onChangeText, error, defauts, defaultVal, disabled, } = props
    return (
        <>
            <TextField error={error ? true : false} id="outlined-multiline-flexible"
                {...defauts}
                label={label}
                //variant="filled"
                onBlur={onBlur}
                onChange={onChangeText}
                helperText={error}
                defaultValue={defaultVal}
                disabled={disabled}
            //hidden={hiddenOnPage}
            />
        </>
    )

}