import {
    FormControl,
    FormHelperText,
    FormLabel,
    Radio,
    RadioGroup
} from '@chakra-ui/core';
import React, { useCallback } from 'react';
import { FormField } from '../../FormField.type';

const RadioSelectField: React.FC<{ config: FormField }> = ({
    config: {
        name,
        label,
        placeholder = null,
        description = null,
        required = true,
        error,
        register,
        toSubmit,
        options,
        default: defaultValue,
        setValue,
        getValues
    }
}) => {
    const handleOnChange = useCallback(
        (
            event: React.ChangeEvent<HTMLInputElement>,
            value: React.ReactText
        ) => {
            setValue(name, value);
        },
        [setValue, name]
    );

    return (
        <FormControl isRequired={required}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <RadioGroup
                id={name}
                aria-describedby={`${name}-helper-text`}
                name={name}
                defaultValue={defaultValue}
                spacing={5}
                isInline
                onChange={handleOnChange}
            >
                {options.map(option => (
                    <Radio
                        id={`${name}-${option.value}`}
                        key={option.value}
                        value={option.value}
                        ref={register({
                            required
                        })}
                        name={name}
                    >
                        {option.label}
                    </Radio>
                ))}
            </RadioGroup>
            {description && (
                <FormHelperText id={`${name}-helper-text`}>
                    {description}
                </FormHelperText>
            )}
        </FormControl>
    );
};

export default RadioSelectField;
