import React from "react";
import { FormControl, InputLabel, Select, useTheme } from "@material-ui/core";
import { useStyles } from "../hook/useStyles";

const SelectOutlined = ({ label, value, handleChange, options, classname }) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-telaio-native-simple">
                {label}
            </InputLabel>
            <Select
                native
                value={value}
                onChange={handleChange}
                label={label}
                name={label.toLowerCase()}
            >
                <option aria-label="None" value="" />
                {options &&
                    options.map((o) => {
                        return (
                            <option
                                aria-label={o.value}
                                value={o.key}
                                key={o.key}
                            >
                                {o.value}
                            </option>
                        );
                    })}
            </Select>
        </FormControl>
    );
};

export default SelectOutlined;
