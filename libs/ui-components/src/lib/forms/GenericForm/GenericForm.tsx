import {
    Box,
    Button,
    ButtonGroup,
    List,
    ListIcon,
    ListItem
} from '@chakra-ui/core';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormField } from './GenericField/FormField.type';
import GenericField from './GenericField/GenericField';
import { GenericFormProps } from './GenericForm.types';

/**
 * Creates default form values from the fields array and their `name` and `default` values
 *
 * @param fields
 */
const createDefaultFormValues = <T extends {}>(fields: FormField[]) => {
    const defaults = fields.reduce(
        (acc, curr) => ({ ...acc, [curr.name]: curr.default }),
        {}
    ) as T;

    return defaults;
};

/**
 * GenericForm accepts generic types to establish a type-safe return shape and build forms consistently.
 *
 * Because I suck at TypeScript and cannot figure out how to generate the return type programmatically from the fields array
 *
 * @param param0
 */
export const GenericForm: React.FC<GenericFormProps> = <FormShape,>({
    submit,
    identifier,
    fields,
    validationSchema,
    formErrors
}) => {
    const {
        handleSubmit,
        errors,
        register,
        formState,
        setValue,
        getValues
    } = useForm({
        mode: 'onChange',
        defaultValues: createDefaultFormValues<FormShape>(fields),
        validationSchema
    });

    const handleEnterSubmit = e => {
        if (e.key === 'Enter' && !e.shiftKey) {
            handleSubmit(submit.handler);
        }
    };

    return (
        <Box display="flex" justifyContent="center" id={identifier}>
            <form onSubmit={handleSubmit(submit.handler)}>
                <Box
                    maxW="lg"
                    minW={'26rem'}
                    mt={16}
                    borderWidth={1}
                    rounded="lg"
                    shadow="md"
                    p={3}
                >
                    {fields.map(field => (
                        <GenericField
                            config={{
                                ...field,
                                error: errors[field.name],
                                register,
                                toSubmit: handleEnterSubmit,
                                setValue,
                                getValues
                            }}
                            key={field.name}
                        />
                    ))}
                    <Box display="flex" justifyContent="flex-start" mt={2}>
                        {formErrors.length > 0 && (
                            <List spacing={3}>
                                {formErrors.map(formError => (
                                    <ListItem
                                        key={formError.message}
                                        color="red.500"
                                    >
                                        <ListIcon
                                            icon="warning"
                                            color="red.500"
                                        />
                                        {formError.message}
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </Box>
                    <ButtonGroup
                        display="flex"
                        spacing={4}
                        justifyContent="flex-end"
                    >
                        <Button
                            aria-label={submit.label}
                            type="submit"
                            isDisabled={!formState.isValid || errors.length > 0}
                            isLoading={formState.isSubmitting}
                            variantColor="green"
                            mt={2}
                        >
                            {submit.label}
                        </Button>
                    </ButtonGroup>
                </Box>
            </form>
        </Box>
    );
};

export default GenericForm;
