import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    FormErrorMessage
} from '@chakra-ui/core';
import React from 'react';
import { FormField } from '../../FormField.type';

const EmailField: React.FC<{ config: FormField }> = ({
    config: {
        name,
        label,
        placeholder = null,
        description = null,
        required = true,
        error,
        register,
        toSubmit
    }
}) => {
    return (
        <FormControl isInvalid={error} isRequired={required}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Input
                type="email"
                id={name}
                aria-describedby={`${name}-helper-text`}
                placeholder={placeholder}
                name={name}
                ref={register({
                    validate: val => val.length > 2
                })}
                isRequired={required}
                onKeyPress={toSubmit}
            />
            {description && (
                <FormHelperText id={`${name}-helper-text`}>
                    {description}
                </FormHelperText>
            )}
            <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
    );
};

export default EmailField;
