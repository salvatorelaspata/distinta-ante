import React from 'react';
import { FormControl, InputLabel, Input, useTheme } from '@material-ui/core';
import { useStyles } from '../hook/useStyles';

const InputOutlined = ({ label, value, type, name, handleChange }) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel htmlFor='outlined-telaio-native-simple'>
                {label}
            </InputLabel>
            <Input
                type={type}
                name={name}
                onChange={handleChange}
                value={value || ''}
            />
        </FormControl>
    );
};

export default InputOutlined;
