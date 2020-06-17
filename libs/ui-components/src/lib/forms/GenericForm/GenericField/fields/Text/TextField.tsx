import { FormControl, FormLabel, Input, FormHelperText } from '@chakra-ui/core';
import React from 'react';
import { FormField } from '../../FormField.type';

const TextField: React.FC<{ config: FormField }> = ({
    config: {
        name,
        label,
        placeholder = null,
        description = null,
        required = true,
        error,
        register,
        toSubmit,
        hidden = false
    }
}) => {
    if (hidden) {
        return <> </>;
    }
    return (
        <FormControl isRequired={required} isInvalid={error}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Input
                type="text"
                id={name}
                aria-describedby={`${name}-helper-text`}
                placeholder={placeholder}
                name={name}
                ref={register({
                    required
                })}
                isRequired={required}
                onKeyPress={toSubmit}
            />
            {description && (
                <FormHelperText id={`${name}-helper-text`}>
                    {description}
                </FormHelperText>
            )}
        </FormControl>
    );
};

export default TextField;
